import { IRouter } from 'express';

import { GoogleOAuth2RouterPaths, googleOAuth2Router } from './google-oauth2-router';
import { googleOAuth2Controller } from '../controllers';

expect.extend({
  countOfRouterPathsToBe(received: IRouter, count: number) {
    const pass = received.stack.length === count;
    return {
      message: pass ? () => 'Success' : () => `Expected ${count} paths, but have ${received.stack.length}`,
      pass,
    };
  },
  pathOfRouterHaveHandler(received: IRouter, path: string, handler: Function) {
    const layer = received.stack.find((item) => item.route.path === path);
    if (!layer) {
      return {
        message: () => `The router doesn't contain the ${ path } path`,
        pass: false,
      };
    }

    if (!layer.route.stack.find((item) => item.handle === handler)) {
      return {
        message: () => `The route doesn't contain the handler`,
        pass: false,
      };
    }

    return {
      message: () => 'Success',
      pass: true,
    };
  },
});

declare global {
  namespace jest {
    interface Matchers<R> {
      countOfRouterPathsToBe(count: number)
      pathOfRouterHaveHandler(path: string, handler: Function): R;
    }
  }
}

jest.mock('../controllers', () => ({
  googleOAuth2Controller: {
    entranceHandler: jest.fn(),
    outputHandler: jest.fn(),
  },
}));

describe('google-oauth2-router', () => {
  const count = Object.keys(GoogleOAuth2RouterPaths).length;

  it(`should contain ${count} paths`, () => {
    expect(googleOAuth2Router).countOfRouterPathsToBe(count);
  });

  it.each`
    path                                | handler
    ${GoogleOAuth2RouterPaths.ENTRANCE} | ${googleOAuth2Controller.entranceHandler}
    ${GoogleOAuth2RouterPaths.GATE}     | ${googleOAuth2Controller.outputHandler}
  `('$path should contain handler', ({ path, handler }) => {
    expect(googleOAuth2Router).pathOfRouterHaveHandler(path, handler);
  });
});

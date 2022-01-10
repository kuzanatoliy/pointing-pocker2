import { GoogleOAuth2RouterPaths, googleOAuth2Router } from './google-oauth2-router';
import { googleOAuth2Controller } from '../controllers';

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

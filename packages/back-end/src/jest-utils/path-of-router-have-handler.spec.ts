import { IRouter } from 'express';

import { pathOfRouterHaveHandler } from './path-of-router-have-handler';

describe('path-of-router-have-handler', () => {
  const router = {
    stack: [
      {
        route: {
          path: '/test-path',
          stack: [
            {
              handle: () => ({}),
            },
          ],
        },
      },
    ],
  } as IRouter;

  it('should not find path', () => {
    const result = pathOfRouterHaveHandler(router, '/test', () => ({}));
    expect(result.pass).toBeFalsy();
    expect(result.message()).toEqual(expect.any(String));
  });

  it('should not find handler', () => {
    const result = pathOfRouterHaveHandler(router, router.stack[0].route.path, () => ({}));
    expect(result.pass).toBeFalsy();
    expect(result.message()).toEqual(expect.any(String));
  });

  it('should be successful', () => {
    const result = pathOfRouterHaveHandler(router, router.stack[0].route.path, router.stack[0].route.stack[0].handle);
    expect(result.pass).toBeTruthy();
    expect(result.message()).toEqual(expect.any(String));
  });
});

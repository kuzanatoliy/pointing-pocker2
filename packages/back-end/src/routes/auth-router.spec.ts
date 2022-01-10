import { AuthRouterPaths, authRouter } from './auth-router';
import { authController } from '../controllers';

jest.mock('../controllers', () => ({
  authController: {
    getUserHandler: jest.fn(),
    cleanUserHandler: jest.fn(),
  },
}));

describe('google-oauth2-router', () => {
  const count = Object.keys(AuthRouterPaths).length;

  it(`should contain ${count} paths`, () => {
    expect(authRouter).countOfRouterPathsToBe(count);
  });

  it.each`
    path                      | handler
    ${AuthRouterPaths.USER}   | ${authController.getUserHandler}
    ${AuthRouterPaths.LOGOUT} | ${authController.cleanUserHandler}
  `('$path should contain handler', ({ path, handler }) => {
    expect(authRouter).pathOfRouterHaveHandler(path, handler);
  });
});

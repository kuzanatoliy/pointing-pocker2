import { IRouter, Router } from 'express';

import { IAuthController, authController } from '../controllers';

export enum AuthRouterPaths {
  USER = '/user',
  LOGOUT = '/logout',
}

class AuthRouter {
  constructor(controller: IAuthController) {
    const router = Router();

    router.get(AuthRouterPaths.USER, controller.getUserHandler);
    router.get(AuthRouterPaths.LOGOUT, controller.cleanUserHandler);

    return router;
  }
}

export const authRouter = new AuthRouter(authController) as IRouter;

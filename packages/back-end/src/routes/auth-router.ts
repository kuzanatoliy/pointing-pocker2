import { IRouter, Router } from 'express';

import { IAuthController, authController } from '../controllers';

class AuthRouter {
  constructor(controller: IAuthController) {
    const router = Router();

    router.get('/user', controller.getUserHandler);
    router.get('/logout', controller.cleanUserHandler);

    return router;
  }
}

export const authRouter = new AuthRouter(authController) as IRouter;

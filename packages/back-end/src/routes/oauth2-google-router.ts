
import { IRouter, Router } from 'express';

import { googleOAuth2Controller, IGoogleOAuth2Controller } from '../controllers';

class OAuth2GoogleRouter {
  constructor(controller: IGoogleOAuth2Controller) {
    const router = Router();

    router.get('/auth/google', controller.entranceHandler);
    router.get('/auth/google/gate', controller.outputHandler);

    return router;
  }
};

export const oauth2GoogleRouter = new OAuth2GoogleRouter(googleOAuth2Controller) as IRouter;

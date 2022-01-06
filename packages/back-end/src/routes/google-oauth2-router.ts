
import { IRouter, Router } from 'express';

import { googleOAuth2Controller, IGoogleOAuth2Controller } from '../controllers';

export enum GoogleOAuth2RouterPaths {
  ENTRANCE = '/auth/google',
  GATE = '/auth/google/gate',
}

class GoogleOAuth2Router {
  constructor(controller: IGoogleOAuth2Controller) {
    const router = Router();

    router.get(GoogleOAuth2RouterPaths.ENTRANCE, controller.entranceHandler);
    router.get(GoogleOAuth2RouterPaths.GATE, controller.outputHandler);

    return router;
  }
};

export const googleOAuth2Router = new GoogleOAuth2Router(googleOAuth2Controller) as IRouter;

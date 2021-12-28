import { Request, Response, NextFunction } from 'express';
import { OK, FORBIDDEN } from 'http-status';

import { IUserStorageService, userStorageService } from '../services';

class AuthController {
  private storageService: IUserStorageService;

  constructor(storageService: IUserStorageService) {
    this.storageService = storageService;
  }

  public getUserHandler = (req: Request, res: Response): void => {
    const user = this.storageService.getData(req.session);

    if (user) {
      res.status(OK).json(user);
    } else {
      res.status(FORBIDDEN).json({});
    }
  };

  public vefifyUserHandler = (req: Request, res: Response, next: NextFunction): void => {
    const user = this.storageService.getData(req.session);

    if (user) {
      next();
    } else {
      res.status(FORBIDDEN).json({});
    }
  };

  public cleanUserHandler = (req: Request, res: Response): void => {
    this.storageService.cleanData(req.session);

    res.status(OK).json({});
  };
}

export type IAuthController = AuthController;

export const authController = new AuthController(userStorageService);

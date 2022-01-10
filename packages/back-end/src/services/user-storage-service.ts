import { Session } from 'express-session';

import { IUser } from '../database';

export interface IStorage extends Session {
  user?: IUser;
}

class UserStorageService {
  public cleanData = (storage: IStorage): void => {
    storage.user = undefined;
  };

  public getData = (storage: IStorage): IUser | undefined => storage.user;

  public setData = (storage: IStorage, user: IUser): IUser => {
    storage.user = user;
    return storage.user;
  };
}

export type IUserStorageService = UserStorageService;

export const userStorageService = new UserStorageService();

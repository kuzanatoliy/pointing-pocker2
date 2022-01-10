
import { IStorage, userStorageService } from './user-storage-service';
import { IUser } from '../database';

describe('user-storage-service', () => {
  let storage: IStorage;

  beforeEach(() => {
    storage = {
      user: {},
    } as IStorage;
  });

  it('should get data', () => {
    const { user } = storage;
    expect(user).toBe(userStorageService.getData(storage));
  });

  it('should set new data', () => {
    const { user } = storage;
    const newUser = {} as IUser;
    userStorageService.setData(storage, newUser);
    const currentUser = userStorageService.getData(storage);
    expect(user).not.toBe(currentUser);
    expect(newUser).toBe(currentUser);
  });

  it('should reset data', () => {
    expect(userStorageService.getData(storage)).toEqual(expect.any(Object));
    userStorageService.cleanData(storage);
    expect(userStorageService.getData(storage)).toBeUndefined();
  });
});

import { IUser, IUserInstance, IUserModel, userModel } from '../database';

class UserService {
  private model: IUserModel;

  constructor(model: IUserModel) {
    this.model = model;
  }

  private create = async (user: IUser): Promise<IUser | null> =>
    this.model.create(user)
        .then(this.extractUserData);

  private update = async (id: string, user: IUser): Promise<IUser | null> =>
    this.model.update(user, { where: { id } })
        .then(([count]) => count ? this.getById(id) : null);

  private getById = async (id: string): Promise<IUser | null> =>
    this.model.findOne({ where: { id } })
        .then(this.extractUserData);

  private getByAuthIdAndEmail = async (authId: string, email: string): Promise<IUser | null> =>
    this.model.findOne({ where: { authId, email } })
        .then(this.extractUserData);

  public createOrUpdate = async (user: IUser): Promise<IUser | null> =>
    this.getByAuthIdAndEmail(<string>user.authId, <string>user.email)
        .then((result) => result ? this.update(<string>result.id, user) : this.create(user));

  private extractUserData = async (instance: IUserInstance | null): Promise<IUser | null> =>
    instance ? instance.toJSON() : null;
}

export type IUserService = UserService;

export const userService = new UserService(userModel);

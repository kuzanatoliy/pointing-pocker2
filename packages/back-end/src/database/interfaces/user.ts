import { Model, ModelCtor } from 'sequelize';

export interface IUser {
  authId?: string;
  createdAt?: Date;
  email?: string;
  firstName?: string;
  id?: string;
  lastName?: string;
  photoUrl?: string;
  provider?: string;
  updatedAt?: Date;
}

export interface IUserInstance extends Model<IUser, Omit<IUser, 'id'>> {};

export interface IUserModel extends ModelCtor<IUserInstance> {};

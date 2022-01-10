import { IUser } from '../database';

export const buildUser = ({
  authId = '111111111',
  email = 'test@email.com',
  firstName = 'user-name',
  id = '1111111111',
  lastName = 'user-surname',
  provider = 'google',
} = {}): IUser => ({
  authId,
  email,
  firstName,
  id,
  lastName,
  provider,
});

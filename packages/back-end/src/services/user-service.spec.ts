import { userService } from './user-service';
import { userModel } from '../database';
import { buildUser } from '../mocks';

jest.mock('../database', () => ({
  userModel: {
    create: jest.fn(),
    update: jest.fn(),
    findOne: jest.fn(),
  },
}));

describe('user-service', () => {
  let create: jest.Mock;
  let update: jest.Mock;
  let findOne: jest.Mock;

  const mockUserData = {
    authId: '111111111',
    email: 'test@email.com',
    firstName: 'first-user-name',
    lastName: 'last-user-name',
    photoUrl: 'url',
    provider: 'google',
  };

  beforeAll(() => {
    const user = buildUser();
    findOne = userModel.findOne as jest.Mock;
    create = userModel.create as jest.Mock;
    update = userModel.update as jest.Mock;
    findOne.mockResolvedValue({ ...user, toJSON: () => user });
    create.mockResolvedValue({ ...user, toJSON: () => user });
    update.mockResolvedValue([1]);
  });

  it('should update user', async () => {
    await userService.createOrUpdate(mockUserData);
    expect(findOne).toBeCalledTimes(2);
    expect(create).not.toBeCalled();
    expect(update).toBeCalled();
  });

  it('should create user', async () => {
    findOne.mockResolvedValueOnce(null);
    await userService.createOrUpdate(mockUserData);
    expect(findOne).toBeCalledTimes(1);
    expect(create).toBeCalled();
    expect(update).not.toBeCalled();
  });
});

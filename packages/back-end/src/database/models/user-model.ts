import { DataTypes } from 'sequelize';

import { connector } from '../connector';
import { IUserInstance } from '../interfaces';

import {
  TABLES,
  FIELD_LENGTHS,
} from '../constants';

export const userModel = connector.define<IUserInstance>(TABLES.USERS, {
  authId: {
    allowNull: false,
    type: DataTypes.STRING(FIELD_LENGTHS.AUTH_ID),
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  email: DataTypes.STRING(FIELD_LENGTHS.EMAIL),
  firstName: DataTypes.STRING(FIELD_LENGTHS.FIRST_NAME),
  id: {
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true,
  },
  lastName: DataTypes.STRING(FIELD_LENGTHS.LAST_NAME),
  photoUrl: DataTypes.STRING,
  provider: {
    allowNull: false,
    type: DataTypes.STRING(FIELD_LENGTHS.PROVIDER),
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
});

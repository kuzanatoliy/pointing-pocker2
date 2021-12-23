import { Sequelize } from 'sequelize';

import * as config from './config';

export const connector = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect,
  host: config.host,
  port: config.port,
});

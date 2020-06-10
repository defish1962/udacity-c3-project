import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';

// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,

//   dialect: config.dialect,
//   storage: ':memory:',
// });

export const sequelize = new Sequelize({
  username: 'udagramdfishdev1',
  password: 'SASpwd4udagram',
  database: 'udagramdfishdev1',
  host: 'udagramdfishdev1.caamxfxdrwcq.us-east-2.rds.amazonaws.com',

  dialect: config.dialect,
  storage: ':memory:',
});

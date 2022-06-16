/* eslint-disable @typescript-eslint/no-var-requires */
import config from './src/config';
const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy;

const ORMconfig = {
  type: 'postgres',
  host: config.databaseURL,
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'postgres',
  schema: 'public',
  synchronize: true,
  logging: false,
  entities: ['dist/src/api/entities/**/*.js', 'src/api/entities/**/*.ts'],
  cli: {
    entitiesDir: 'dist/api/entities',
  },
  namingStrategy: new SnakeNamingStrategy(),
};

export = ORMconfig;

/* eslint-disable @typescript-eslint/no-var-requires */
import config from './src/config';
const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy;

const ORMconfig = {
  type: 'postgres',
  host: config.databaseURL,
  port: process.env.POSTGRES_PORT ?? 5432,
  username: process.env.POSTGRES_USER ?? 'postgres',
  password: process.env.POSTGRES_PASSWORD ?? 'admin',
  database: process.env.POSTGRES_DBNAME ?? 'postgres',
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

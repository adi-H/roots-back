/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('./dist/config').default;

const distConfig = {
  type: 'postgres',
  host: config.databaseURL,
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'roots',
  synchronize: true,
  logging: false,
  entities: ['dist/api/entities/**/*.js'],
  cli: {
    entitiesDir: 'dist/api/entities',
  },
};

module.exports = distConfig;

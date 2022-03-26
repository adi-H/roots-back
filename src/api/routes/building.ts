import { Router } from 'express';
import { getConnection } from 'typeorm';

const route = Router();

/**
 * Get all of the building
 */
route.get('/', (req, res) => {
  console.log('Getting all buildings');
  const dbConnection = getConnection();
  dbConnection
    .getRepository('building')
    .find()
    .then((buildings) => {
      res.json(buildings);
    })
    .catch((err) => {
      console.error(err.stack);
      res.status(500).end();
    });
});

export default route;

import { NextFunction, Request, Response, Router } from 'express';
import { Logger } from 'winston';
import { Container } from 'typedi';
import { getConnection } from 'typeorm';

const route = Router();

/**
 * Get all of the classrooms
 */
route.get('/', (req, res) => {
  console.log('Getting all classes');
  const dbConnection = getConnection();
  dbConnection
    .getRepository('Class')
    .find({ relations: ['keyholder', 'owner', 'building'] })
    .then((classes) => {
      res.json(classes);
    })
    .catch((err) => {
      console.error(err.stack);
      res.status(500).end();
    });
});

/**
 * A user is signing for a class
 * Body:
 *  classId - the id of the class the user is signing for
 */
route.post('/sign', (req, res) => {
  const userId = req.currentUser.id;
  const classId = req.body.classId;
  console.log(`The user ${userId} is signing for the class ${classId}`);

  const dbConnection = getConnection();
  dbConnection
    .getRepository('Class')
    .update({ id: classId }, { keyholder: userId, sign_time: new Date() })
    .then((result) => {
      console.log(result);
      res.status(200).end();
    })
    .catch((err) => {
      console.error(err.stack);
      res.status(500).end();
    });
});

export default route;

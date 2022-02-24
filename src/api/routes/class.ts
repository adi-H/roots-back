import { NextFunction, Request, Response, Router } from 'express';
import { Logger } from 'winston';
import { Container } from 'typedi';
import { getConnection } from 'typeorm';

const route = Router();

/**
 * Get all of the classrooms
 */
route.get('/', (req, res) => {
    console.log('Getting all classes')
    const connection = getConnection();
    connection.query('select * from "Class"')
    .then(classes => {
        res.json(classes)
    })
    .catch(err => {
        console.error(err.stack)
        res.status(500).end();
    })
})

/**
 * A user is signing for a class
 * Body:
 *  userId - the signing user's id
 *  classId - the id of the class the user is signing for
 */
route.post('/sign', (req, res) => {
    const userId = req.body.userId;
    const classId = req.body.classId;
    console.log(`The user ${userId} is signing for the class ${classId}`)

    const connection = getConnection();
    connection.createQueryBuilder()
    .update('Class')
    .set({keyholder: userId})
    .where('id = :classId', {classId: classId})
    .execute()
    .then(result => {
        console.log(result)
        res.status(200).end()
    })
    .catch(err => {
        console.error(err.stack)
        res.status(500).end();
    })
})

/**
 * A user is signing for a class
 * Body:
 *  userId - the signing user's id
 *  classId - the id of the class the user is signing for
 */
 route.post('/sign', (req, res) => {
    const userId = req.body.userId;
    const classId = req.body.classId;
    console.log(`The user ${userId} is signing for the class ${classId}`)

    const connection = getConnection();
    connection.createQueryBuilder()
    .update('Class')
    .set({keyholder: userId})
    .where('id = :classId', {classId: classId})
    .execute()
    .then(result => {
        console.log(result)
        res.status(200).end()
    })
    .catch(err => {
        console.error(err.stack)
        res.status(500).end();
    })
})

export default route;

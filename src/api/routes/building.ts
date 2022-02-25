import { NextFunction, Request, Response, Router } from 'express';
import { Logger } from 'winston';
import { Container } from 'typedi';
import { getConnection } from 'typeorm';

const route = Router();

/**
 * Get all of the building
 */
route.get('/', (req, res) => {
    console.log('Getting all buildings')
    const connection = getConnection();
    connection.query('select * from "Building"')
    .then(buildings => {
        res.json(buildings)
    })
    .catch(err => {
        console.error(err.stack)
        res.status(500).end();
    })
});

export default route;

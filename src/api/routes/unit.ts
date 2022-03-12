import { NextFunction, Request, Response, Router } from 'express';
import { Logger } from 'winston';
import { Container } from 'typedi';
import { UnitBL } from '../bl/UnitBL';

const route = Router();

route.get('/', async (req, res) => {
  try {
    const units = await UnitBL.getAllUnits();

    res.json(units).end();
  } catch (e) {
    res.status(500).end();
  }
});

export default route;

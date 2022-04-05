import { NextFunction, Request, Response, Router } from 'express';
import { Logger } from 'winston';
import { Container } from 'typedi';
import { UnitBL } from '../bl/UnitBL';
import { User } from '../entities/User';

const route = Router();

route.get('/', async (req, res) => {
  try {
    const allUnits = await UnitBL.getAll();

    res.json(allUnits).end();
  } catch (e) {
    res.status(500).end();
  }
});

route.post('/companyTeams', async (req, res) => {
  try {
    const user: User = req.currentUser;
    const companyUnits = await UnitBL.getCompanyTeams(req.body.companyId);

    res.json(companyUnits).end();
  } catch (e) {
    res.status(500).end();
  }
});

export default route;

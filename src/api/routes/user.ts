import { NextFunction, Request, Response, Router } from 'express';
import { Logger } from 'winston';
import { Container } from 'typedi';
import { User } from '../entities/User';
import { UnitBL } from '../bl/UnitBL';
import { UserBL } from '../bl/UserBL';

const route = Router();

route.post('/AllCadetsInCompany', async (req, res) => {
    try {
      const user: User = req.currentUser;
      const companyUnits = await UnitBL.getCompanyTeams(req.body.companyId);
      const companyIds = []
      companyUnits.forEach(unit => {
        companyIds.push(unit.id)
      })
      const cadets = await UserBL.usersFromTeams(companyIds);

      res.json(cadets).end();
    } catch (e) {
      res.status(500).end();
    }
  });

export default route;

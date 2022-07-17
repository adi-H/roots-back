import { Router } from 'express';
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

route.get('/companiesByGdud/:gdudId', async (req, res) => {
  try {
    const gdudId = parseInt(req.params.gdudId);
    const gdudCompanies = await UnitBL.companiesByGdud(gdudId);

    res.json(gdudCompanies).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.get('/allCadetsInCompany', async (req, res) => {
  try {
    const user: User = req.currentUser;
    const companyUnits = await UnitBL.getCompanyTeamsWithCadets(user.team.parent.id);

    res.json(companyUnits).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.get('/allUsersInCompany/:companyId', async (req, res) => {
  try {
    const companyId: number = parseInt(req.params.companyId);
    const users = await UnitBL.getAllUsersInCompany(companyId);

    res.json(users).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

export default route;

import { Router } from 'express';
import { RoleBL } from '../bl/RoleBL';

const route = Router();

route.get('/', async (req, res) => {
  try {
    const roles = await RoleBL.getAll();

    res.json(roles).end();
  } catch (e) {
    res.status(500).end();
  }
});

export default route;

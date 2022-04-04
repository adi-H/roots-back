import { Router } from 'express';
import { ClassTypeBL } from '../bl/ClassTypeBL';

const route = Router();

route.get('/', async (req, res) => {
  try {
    const classTypes = await ClassTypeBL.getAll();

    res.json(classTypes).end();
  } catch (e) {
    res.status(500).end();
  }
});

export default route;

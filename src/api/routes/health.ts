import { Router } from 'express';

const route = Router();

route.get('/', async (req, res) => {
  res.json('OK').end();
});

export default route;

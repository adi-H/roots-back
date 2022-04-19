import { Router } from 'express';
import { RecipientBL } from '../bl/RecipientBL';
import { UrlBL } from '../bl/UrlBL';

const route = Router();

route.get('/', async (req, res) => {
  try {
    const recipients = await RecipientBL.getAll();

    res.json(recipients).end();
  } catch (e) {
    res.status(500).end();
  }
});

export default route;

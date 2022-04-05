import { Router } from 'express';
import { UrlBL } from '../bl/UrlBL';

const route = Router();

route.get('/brosh', async (req, res) => {
  try {
    const broshURL = await UrlBL.getBroshURL();

    res.json(broshURL).end();
  } catch (e) {
    res.status(500).end();
  }
});

export default route;

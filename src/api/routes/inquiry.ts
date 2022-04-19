import { Router } from 'express';
import { InquiryBL } from '../bl/InquiryBL';
import { RecipientBL } from '../bl/RecipientBL';
import { UrlBL } from '../bl/UrlBL';

const route = Router();

route.post('/', async (req, res) => {
  try {
    await InquiryBL.send(req.body);

    res.status(200).end();
  } catch (e) {
    console.log(e)
    res.status(500).end();
  }
});

export default route;

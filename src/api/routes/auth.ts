import { Router } from 'express';
import { UserBL } from '../bl/UserBL';
import { isUserAuthenticated } from '../middlewares/middlewares';

const route = Router();

// TODO: authenticate through microsoft's api, meanwhile the password is not encrypted since it is about to change.
route.post('/login', async (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;

  const jwt = await UserBL.validatePassword(userId, password);

  if (!!jwt) {
    res.cookie('jwt', jwt);
    res.status(200).end();
  } else {
    res.status(401).end();
  }
});

export default route;

import { Router } from 'express';
import { UserBL } from '../bl/UserBL';

const route = Router();

// TODO: authenticate through microsoft's api, meanwhile the password is not encrypted since it is about to change.
route.post('/login', async (req, res) => {
  const userId = req.body.userId;
  const password = req.body.password;

  const jwt = await UserBL.validatePassword(userId, password);

  if (!!jwt) {
    res.cookie('jwt', jwt);
    res.set('access-control-expose-headers', 'Set-Cookie');
    res.status(200).end();
  } else {
    res.status(403).end();
  }
});

export default route;

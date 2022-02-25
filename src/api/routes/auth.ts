import { Router } from 'express';
import { UserBL } from '../bl/UserBL';

const route = Router();

// TODO: authenticate through microsoft's api, meanwhile the password is not encrypted since it is about change.
route.post('/login', (req, res) => {
  const userId = req.body.id;
  const password = req.body.password;

  UserBL.validatePassword(userId, password) && res.status(200);
});

export default route;

import { Router } from 'express';
import { Roles } from '../../enums/Roles';
import { UserBL } from '../bl/UserBL';
import { authorizationCheck } from '../middlewares/AuthorityChecks';

const route = Router();

route.put('/updateRole', authorizationCheck([Roles.SAMP]), async (req, res) => {
  const userId = req.body.userId;
  const roleId = req.body.roleId;

  const updatedRole = await UserBL.updateRole(userId, roleId);

  if (!!updatedRole) {
    res.status(204).end();
  } else {
    res.status(403).end();
  }
});

export default route;

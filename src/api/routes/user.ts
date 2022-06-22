import { Router } from 'express';
import { UserBL } from '../bl/UserBL';

const route = Router();

route.get('/', async (req, res) => {
  const allUsers = await UserBL.getAll();

  if (!!allUsers) {
    res.json(allUsers).status(204).end();
  } else {
    res.status(403).end();
  }
});

route.get('/role', async (req, res) => {
  const allUsersWithRoles = await UserBL.getAllWithRoles();

  if (!!allUsersWithRoles) {
    res.json(allUsersWithRoles).status(204).end();
  } else {
    res.status(403).end();
  }
});

route.put('/updateRole', async (req, res) => {
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

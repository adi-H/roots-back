import { Router } from 'express';
import { Roles } from '../../enums/Roles';
import { ClassAssignBL } from '../bl/ClassAssignBL';
import { authorizationCheck } from '../middlewares/AuthorityChecks';

const route = Router();

route.get('/week/:date', async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const schedule = await ClassAssignBL.getWeekSchedule(date);
    res.json(schedule).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.get('/day/:date', async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const schedule = await ClassAssignBL.getDaySchedule(date);
    res.json(schedule).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.get(
  '/requests',
  authorizationCheck([Roles.KAHAD_PLUGA]),
  async (req, res) => {
    const currentUser = req.currentUser;

    try {
      res.json(await ClassAssignBL.getRequests(currentUser.team)).end();
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  }
);

route.get(
  '/requests/user',
  authorizationCheck([Roles.KAHAD_PLUGA]),
  async (req, res) => {
    const currentUser = req.currentUser;

    try {
      res.json(await ClassAssignBL.getUserRequests(currentUser)).end();
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  }
);

route.post('/', async (req, res) => {
  if (
    !req.body.name &&
    !req.body.startDate &&
    !req.body.endDate &&
    !req.body.classId
  ) {
    res.status(400).end();
  } else {
    try {
      const createdAssign = await ClassAssignBL.createClassAssignmentRequest(
        req.body.title,
        new Date(req.body.startDate),
        new Date(req.body.endDate),
        req.currentUser,
        req.body.classId
      );
      res.json(createdAssign).end();
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  }
});

route.post(
  '/accept',
  authorizationCheck([Roles.KAHAD_PLUGA, Roles.KAHAD_TZEVET]),
  async (req, res) => {
    try {
      await ClassAssignBL.accept(req.body.classAssignId);
      res.status(200).end();
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  }
);

route.post(
  '/reject',
  authorizationCheck([Roles.KAHAD_PLUGA, Roles.KAHAD_TZEVET]),
  async (req, res) => {
    try {
      await ClassAssignBL.reject(req.body.classAssignId);
      res.status(200).end();
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  }
);

export default route;

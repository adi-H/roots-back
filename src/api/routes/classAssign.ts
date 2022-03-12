import { Router } from 'express';
import { ClassAssignBL } from '../bl/ClassAssignBL';

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
    const schedule = await ClassAssignBL.getDaySchedule(req.body.date);
    res.json(schedule).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

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
        req.body.name,
        req.body.startDate,
        req.body.endDate,
        req.currentUser,
        req.body.classId
      );
      res.json(createdAssign).end();
    } catch (e) {
      res.status(500).end();
    }
  }
});

export default route;

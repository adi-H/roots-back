import { Router } from 'express';
import { AttendanceBL } from '../bl/AttendanceBL';
import { UnitBL } from '../bl/UnitBL';
import { SocketConnection } from '../services/SocketConnection';

const route = Router();

route.post('/', async (req, res) => {
  try {
    const attendances = req.body;
    await AttendanceBL.addAttendances(attendances);

    try {
      SocketConnection.sendCompany(
        await UnitBL.getCompanyTeamsWithCadets(req.currentUser.team.parent.id),
        req.currentUser.team.parent.id
      );
    } catch (e) {}

    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.get('/clear', async (req, res) => {
  try {
    const userCompanyId = req.currentUser.team.parent.id;
    await AttendanceBL.clearCompany(userCompanyId);

    try {
      SocketConnection.sendCompany(
        await UnitBL.getCompanyTeamsWithCadets(req.currentUser.team.parent.id),
        req.currentUser.team.parent.id
      );
    } catch (e) {}

    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.delete('/:attendanceId', async (req, res) => {
  try {
    await AttendanceBL.delete(req.params.attendanceId);

    try {
      SocketConnection.sendCompany(
        await UnitBL.getCompanyTeamsWithCadets(req.currentUser.team.parent.id),
        req.currentUser.team.parent.id
      );
    } catch (e) {}

    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

export default route;

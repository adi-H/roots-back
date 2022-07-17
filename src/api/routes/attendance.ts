import { Router } from 'express';
import { AttendanceBL } from '../bl/AttendanceBL';
import { UnitBL } from '../bl/UnitBL';
import { SocketConnection } from '../services/SocketConnection';

const route = Router();

route.post('/', async (req, res) => {
  try {
    const attendances = req.body;
    await AttendanceBL.updateAttendances(attendances);

    try {
      SocketConnection.sendCompany(
        await UnitBL.getCompanyTeamsWithCadets(req.currentUser.team.parent.id),
        req.currentUser.team.parent.id
      );
    } catch (e) { }

    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.put('/team/:teamId/clear', async (req, res) => {
  const teamId = parseInt(req.params.teamId);
  const userCompanyId = req.currentUser.team.parent.id;

  try {
    await AttendanceBL.clearTeam(teamId);
    SocketConnection.sendCompany(
      await UnitBL.getCompanyTeamsWithCadets(userCompanyId),
      userCompanyId
    );

    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

export default route;

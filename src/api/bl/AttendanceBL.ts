import { getRepository, In } from 'typeorm';
import { Attendance } from '../entities/Attendance';
import { User } from '../entities/User';
export class AttendanceBL {
  public static async updateAttendances(attendance: Attendance | Attendance[]) {
    const attendanceRepository = getRepository(Attendance);
    const attendances: Attendance[] =
      attendance instanceof Array ? attendance : [attendance];

    return await attendanceRepository.save(attendances);
  }

  public static async clearTeam(teamId: number) {
    const userRepository = getRepository(User);
    const attendanceRepository = getRepository(Attendance);

    const teamCadetsIds = (
      await userRepository.find({
        where: { team: teamId },
      })
    ).map((cadet) => cadet.id);

    const attendances = await attendanceRepository.find({
      where: { userId: In(teamCadetsIds) },
    });

    this.updateAttendances(
      attendances.map((attendance) => {
        attendance.inAttendance = null;
        attendance.reason = null;
        return attendance;
      })
    );
  }
}

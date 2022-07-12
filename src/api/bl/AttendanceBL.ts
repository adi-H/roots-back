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

    console.log(attendances);
  }

  public static async clearCompany(companyId: number) {
    const attendanceRepository = getRepository(Attendance);

    const attendances = await attendanceRepository
      .createQueryBuilder('attendance')
      .select()
      .leftJoinAndSelect('attendance.user', 'user')
      .where((qb) => {
        const subQuery = qb
          .subQuery()
          .select('user.id')
          .from(User, 'user')
          .leftJoin('user.team', 'team')
          .leftJoin('team.parent', 'company')
          .where('company.id = :companyId', { companyId })
          .getQuery();

        return `attendance.user.id IN ${subQuery}`;
      })
      .getMany();

    const attendancesIds = attendances.map((attendance) => attendance.user.id);

    await attendanceRepository.remove(attendances);

    await attendanceRepository.delete({ user: { id: In(attendancesIds) } });
  }
}

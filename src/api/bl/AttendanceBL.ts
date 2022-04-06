import { getRepository } from 'typeorm';
import { Attendance } from '../entities/Attendance';
export class AttendanceBL {
  public static async addAttendances(attendances: Attendance[]) {
    const attendanceRepository = getRepository(Attendance);

    return await attendanceRepository.save(attendances);
  }

  public static async clearCompany(companyId: number) {
    const attendanceRepository = getRepository(Attendance);

    return await attendanceRepository
      .createQueryBuilder('attendance')
      .leftJoin('attendance.user', 'user')
      .leftJoin('user.team', 'team')
      .leftJoin('team.parent', 'company')
      .where('company.id = :companyId', { companyId })
      .delete();
  }
}

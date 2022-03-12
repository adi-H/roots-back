import { Between, getRepository, MoreThan } from 'typeorm';
import { Class } from '../entities/Class';
import { ClassAssign } from '../entities/ClassAssign';
import { User } from '../entities/User';
export class ClassAssignBL {
  public static async getWeekSchedule(date: Date) {
    const classAssignRepository = getRepository(ClassAssign);
    const firstDay = new Date(date.setDate(date.getDate() - date.getDay()));
    const lastDay = new Date(date.setDate(date.getDate() - date.getDay() + 7));

    firstDay.setHours(0, 0, 0, 0);
    lastDay.setHours(0, 0, 0, 0);

    return await classAssignRepository.find({
      where: { startDate: Between(firstDay, lastDay), isApproved: true },
      relations: [
        'assignedClass',
        'assignedClass.building',
        'assignedClass.owner',
        'assignedClass.owner.parent',
        'assignedClass.owner.parent.parent',
      ],
    });
  }

  public static async getDaySchedule(date: Date) {
    const classAssignRepository = getRepository(ClassAssign);

    date.setHours(0, 0, 0, 0);

    return await classAssignRepository.find({
      where: {
        startDate: Between(
          { ...date },
          new Date(date.setDate(date.getDate() + 1))
        ),
      },
    });
  }

  public static async createClassAssignmentRequest(
    eventName: string,
    startDate: Date,
    endDate: Date,
    creatingUser: User,
    assignedClassId: string
  ) {
    const classAssignRepository = getRepository(ClassAssign);
    const classRepository = getRepository(Class);

    try {
      const assignedClass = await classRepository.findOneOrFail(
        assignedClassId,
        { relations: ['owner'] }
      );
      const isUserOwningClass = this.doesUserOwnClass(
        assignedClass,
        creatingUser
      );

      return await classAssignRepository.save({
        name: eventName,
        startDate,
        endDate,
        createdBy: { id: creatingUser.id },
        isApproved: isUserOwningClass,
        assignedClass: { id: assignedClassId },
      });
    } catch (e) {
      throw new Error('Assignment could not be created');
      console.log(e);
    }
  }

  private static doesUserOwnClass(assignedClass: Class, user: User) {
    let usersUnit = user.team;
    while (!!usersUnit) {
      if (usersUnit.id === assignedClass.owner.id) {
        return true;
      }

      usersUnit = usersUnit.parent;
    }
  }
}

import { Between, getRepository, MoreThan } from 'typeorm';
import { Class } from '../entities/Class';
import { ClassAssign } from '../entities/ClassAssign';
import { Unit } from '../entities/Unit';
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
        'createdBy',
        'createdBy.team',
        'createdBy.team.parent',
        'createdBy.team.parent.parent',
        'assignedClass',
        'assignedClass.building',
        'assignedClass.owner',
        'assignedClass.owner.parent',
        'assignedClass.owner.parent.parent',
      ],
    });
  }

  public static async getDaySchedule(date: Date) {
    // TODO: WIP
    const classAssignRepository = getRepository(ClassAssign);
    const firstDay: Date = new Date(date.getTime());
    const lastDay: Date = new Date(date.getTime());

    lastDay.setDate(lastDay.getDate() + 1);
    firstDay.setHours(0, 0, 0, 0);
    lastDay.setHours(0, 0, 0, 0);

    return await classAssignRepository.find({
      where: { startDate: Between(firstDay, lastDay), isApproved: true },
      relations: [
        'createdBy',
        'createdBy.team',
        'createdBy.team.parent',
        'createdBy.team.parent.parent',
        'assignedClass',
        'assignedClass.building',
        'assignedClass.owner',
        'assignedClass.owner.parent',
        'assignedClass.owner.parent.parent',
      ],
    });
  }

  public static async createClassAssignmentRequest(
    eventName: string,
    startDate: Date,
    endDate: Date,
    creatingUser: User,
    assignedClassId: number
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
        title: eventName,
        startDate,
        endDate,
        createdBy: { id: creatingUser.id },
        isApproved: isUserOwningClass,
        assignedClass: { id: assignedClassId },
      });
    } catch (e) {
      console.log(e);
      throw new Error('Assignment could not be created');
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

    return false;
  }

  public static async getPlugaRequests(team: Unit) {
    const classAssignRepository = getRepository(ClassAssign);

    console.log(team);

    return await classAssignRepository
      .createQueryBuilder('classAssign')
      .select()
      .leftJoinAndSelect('classAssign.assignedClass', 'class')
      .leftJoinAndSelect('classAssign.createdBy', 'creatingUser')
      .leftJoinAndSelect('class.owner', 'owner')
      .where('owner.id = :plugaId AND classAssign.isApproved = :isApproved', {
        plugaId: team.parent.id,
        isApproved: false,
      })
      .getMany();
  }

  public static async getGdudRequests(team: Unit) {
    const classAssignRepository = getRepository(ClassAssign);

    const qb = classAssignRepository.createQueryBuilder('classAssign');

    return await qb
      .select()
      .leftJoinAndSelect('classAssign.assignedClass', 'class')
      .leftJoinAndSelect('classAssign.createdBy', 'creatingUser')
      .leftJoinAndSelect('class.owner', 'owner')
      .where('classAssign.isApproved = :isApproved', {
        isApproved: false,
      })
      .andWhere((qb) => {
        const subQuery = qb
          .subQuery()
          .select('unit.id')
          .from(Unit, 'unit')
          .leftJoin('unit.parent', 'parentUnit')
          .where('parentUnit.id = :gdudId')
          .getQuery();

        return 'owner.id IN ' + subQuery;
      })
      .setParameter('gdudId', team.parent.parent.id)
      .getMany();
  }

  public static async accept(classAssignId: number) {
    const classAssignRepository = getRepository(ClassAssign);

    classAssignRepository.update(classAssignId, { isApproved: true });
  }

  public static async reject(classAssignId: number) {
    const classAssignRepository = getRepository(ClassAssign);

    classAssignRepository.delete(classAssignId);
  }
}

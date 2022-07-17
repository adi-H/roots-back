import { User } from './../entities/User';
import { getRepository, In, IsNull } from 'typeorm';
import { Attendance } from '../entities/Attendance';
import { Unit } from '../entities/Unit';
export class UnitBL {
	public static async getGdudim() {
		const unitRepository = getRepository(Unit);

		return await unitRepository.find({ where: { parent: IsNull() } });
	}

	public static async getAll() {
		const unitRepository = getRepository(Unit);

		return await unitRepository.find({
			where: { parent: IsNull() },
			relations: [ 'children', 'children.children' ]
		});
	}

	public static async getCompanyTeamsWithCadets(companyId: number) {
		const unitRepository = getRepository(Unit);

		return await unitRepository.findOne({
			where: { id: companyId },
			relations: [ 'children', 'children.teamCadets', 'children.teamCadets.attendance' ]
		});
	}

	public static async companiesByGdud(gdudId: number) {
		const unitRepository = getRepository(Unit);

		return await unitRepository.find({
			where: { parent: gdudId }
		});
	}

	public static async getAllUsersInCompany(companyId: number): Promise<User[]> {
		const unitRepository = getRepository(Unit);

		const allTeamsInCompany: number[] = (await unitRepository.find({ where: { parent: companyId } })).map(
			(unit) => unit.id
		);

		const userRepository = getRepository(User);

		return await userRepository.find({ where: { teamId: In(allTeamsInCompany) } });
	}
}

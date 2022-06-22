import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Attendance } from './Attendance';
import { Role } from './Role';
import { Unit } from './Unit';
@Entity('user')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @ManyToOne((type) => Unit, (unit) => unit.id)
  @JoinColumn({ name: 'team_id', referencedColumnName: 'id' })
  team: Unit;

  @ManyToOne((type) => Role, (role) => role.id)
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  role?: Role;

  @OneToOne(() => Attendance, (Attendance) => Attendance.user) // specify inverse side as a second parameter
  attendance: Attendance;

  public constructor(data?: User) {
    if (data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.role = data.role || this.role;
    }
  }

  toJSON(): Partial<User> {
    const { password, ...user } = this;

    return {
      ...user,
    };
  }
}

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Role } from './Role';
import { Unit } from './Unit';
@Entity('User')
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

  public constructor(data?: User) {
    if (data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.role = data.role || this.role;
    }
  }
}

import { Column, Entity, PrimaryColumn } from 'typeorm';

export type Role = 'user' | 'staff' | 'admin';

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
  role?: Role = 'user';

  public constructor(data?: User) {
    if (data) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.role = data.role || this.role;
    }
  }
}

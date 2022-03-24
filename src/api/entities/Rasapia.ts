import { RasapiaStatuses } from '../../enums/RasapiaStatuses';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Unit } from './Unit';
  
  @Entity('rasapia')
  export class Rasapia {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    item: string;

    @Column()
    quantity: number;
  
    @Column()
    comments?: string;

    @Column({
        type: "enum",
        enum: RasapiaStatuses,
        default: RasapiaStatuses.IN
    })
    status: RasapiaStatuses;

    @OneToOne((type) => Unit, (unit) => unit.id)
    @JoinColumn({ name: 'owner_id', referencedColumnName: 'id' })
    owner: Unit;

    @ManyToOne((type) => Unit, (unit) => unit.id)
    @JoinColumn({ name: 'borrowed_from', referencedColumnName: 'id' })
    borrowedFrom?: Unit;

    @ManyToOne((type) => Unit, (unit) => unit.id)
    @JoinColumn({ name: 'borrowed_to', referencedColumnName: 'id' })
    borrowedTo?: Unit;

  
    public constructor(data?: Rasapia) {
      
    }
  }
  
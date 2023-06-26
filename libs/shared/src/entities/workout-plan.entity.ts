import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TraineeEntity } from './trainee.entity';
import { WorkoutEntity } from './workout.entity';

@Entity('workout_plan')
export class WorkoutPlanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}

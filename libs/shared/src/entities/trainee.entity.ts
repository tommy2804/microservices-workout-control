import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserEntity } from './user.entity';
import { WorkoutPlanEntity } from './workout-plan.entity';
import { TrainerEntity } from './trainer.entity';

@Entity('trainee')
export class TraineeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @Column({ nullable: true })
  height: number;

  @Column({ nullable: true })
  weight: number;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  medicalConditions: string;

  trainers: TrainerEntity[];
}

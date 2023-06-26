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
import { WorkoutEntity } from './workout.entity';
import { TraineeEntity } from './trainee.entity';

@Entity('trainer')
export class TrainerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  profileImage: string;

  @Column({ nullable: true })
  experience: string;

  @Column({ nullable: true })
  certification: string;

  @Column({ nullable: true })
  specialization: string;

  @ManyToOne(() => TraineeEntity, (trainee) => trainee.trainers)
  trainee: TraineeEntity;

  @OneToMany(() => WorkoutEntity, (workout) => workout.trainer)
  workouts: WorkoutEntity[];
}

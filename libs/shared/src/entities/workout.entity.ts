import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

import { UserEntity } from './user.entity';
import { ExerciseEntity } from './exercise.entity';
import { TraineeEntity } from './trainee.entity';
import { TrainerEntity } from './trainer.entity';
import { WorkoutPlanEntity } from './workout-plan.entity';

@Entity('workout')
export class WorkoutEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  duration: number;

  @Column({ nullable: true })
  difficultyLevel: string;

  @Column({ nullable: true })
  equipment: string;

  @Column({ default: true })
  isPublic: boolean;

  @OneToMany(() => ExerciseEntity, (exercise) => exercise.workouts, {
    cascade: true,
  })
  exercises: ExerciseEntity[];

  @ManyToOne(() => TrainerEntity, (trainer) => trainer.workouts)
  trainer: TrainerEntity;

  @CreateDateColumn()
  createdAt: Date;
}

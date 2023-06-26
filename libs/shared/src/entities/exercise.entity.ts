import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { WorkoutEntity } from './workout.entity';

@Entity('exercises')
export class ExerciseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  bodyPart: string;

  @Column({ nullable: true })
  target: string;

  @Column({ nullable: true })
  equipment: string;

  @Column({ nullable: true })
  gifUrl: string;

  @Column({ nullable: true })
  imageUrl: string;

  @ManyToMany(() => WorkoutEntity, (workout) => workout.exercises)
  @JoinTable({
    name: 'workout_exercises',
    joinColumn: { name: 'exercise_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'workout_id', referencedColumnName: 'id' },
  })
  workouts: WorkoutEntity[];
}

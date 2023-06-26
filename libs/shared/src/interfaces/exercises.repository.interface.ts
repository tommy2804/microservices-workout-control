import { BaseInterfaceRepository } from '@app/shared';

import { ExerciseEntity } from '../entities/exercise.entity';

export interface ExercisesRepositoryInterface
  extends BaseInterfaceRepository<ExerciseEntity> {
  findAllExercises(): Promise<ExerciseEntity[]>;
}

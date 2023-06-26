import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExerciseEntity } from '../entities/exercise.entity';
import { ExercisesRepositoryInterface } from '../interfaces/exercises.repository.interface';
import { BaseAbstractRepository } from './base/base.abstract.repository';

@Injectable()
export class ExercisesRepository
  extends BaseAbstractRepository<ExerciseEntity>
  implements ExercisesRepositoryInterface
{
  constructor(
    @InjectRepository(ExerciseEntity)
    private readonly exerciseEntity: Repository<ExerciseEntity>,
  ) {
    super(exerciseEntity);
  }

  public async createExercise(
    exerciseData: ExerciseEntity,
  ): Promise<ExerciseEntity> {
    const exercise = this.exerciseEntity.create(exerciseData);
    return await this.exerciseEntity.save(exercise);
  }

  public async findAllExercises(): Promise<ExerciseEntity[]> {
    return await this.exerciseEntity.find();
  }

  public async findExerciseById(
    id: number,
  ): Promise<ExerciseEntity | undefined> {
    return await this.exerciseEntity.findOneById(id);
  }

  public async updateExercise(
    id: number,
    exerciseData: Partial<ExerciseEntity>,
  ): Promise<ExerciseEntity | undefined> {
    await this.exerciseEntity.update(id, exerciseData);
    return await this.exerciseEntity.findOneById(id);
  }

  public async deleteExercise(id: number): Promise<boolean> {
    const result = await this.exerciseEntity.delete(id);
    return result.affected > 0;
  }
}

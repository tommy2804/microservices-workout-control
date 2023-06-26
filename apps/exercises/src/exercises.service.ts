import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ExerciseEntity, ExercisesRepository } from '@app/shared';

@Injectable()
export class ExercisesService {
  constructor(
    @Inject('ExercisesRepositoryInterface')
    private readonly exercisesRepository: ExercisesRepository,
    @Inject('AUTH_SERVICE')
    private readonly authService: ClientProxy,
  ) {}

  async findAllExercises(): Promise<ExerciseEntity[]> {
    return await this.exercisesRepository.findAllExercises();
  }

  async findExerciseById(id: number): Promise<ExerciseEntity | undefined> {
    return await this.exercisesRepository.findExerciseById(id);
  }

  async createExercise(exerciseData: ExerciseEntity): Promise<ExerciseEntity> {
    return await this.exercisesRepository.createExercise(exerciseData);
  }

  async updateExercise(
    id: number,
    exerciseData: Partial<ExerciseEntity>,
  ): Promise<ExerciseEntity | undefined> {
    return await this.exercisesRepository.updateExercise(id, exerciseData);
  }

  async deleteExercise(id: number): Promise<boolean> {
    return await this.exercisesRepository.deleteExercise(id);
  }

  // Additional methods
  async getHello(): Promise<string> {
    return 'Hello World!';
  }

  // Example of using the authService
  async authenticateUser(credentials: any): Promise<any> {
    // Example implementation using the authService
    const result = await this.authService
      .send('authenticate', credentials)
      .toPromise();
    return result;
  }
}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExerciseEntity } from '@app/shared';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  async getAllExercises(): Promise<ExerciseEntity[]> {
    return await this.exercisesService.findAllExercises();
  }

  @Get(':id')
  async getExerciseById(
    @Param('id') id: number,
  ): Promise<ExerciseEntity | undefined> {
    return await this.exercisesService.findExerciseById(id);
  }

  @Post()
  async createExercise(
    @Body() exerciseData: ExerciseEntity,
  ): Promise<ExerciseEntity> {
    return await this.exercisesService.createExercise(exerciseData);
  }

  @Put(':id')
  async updateExercise(
    @Param('id') id: number,
    @Body() exerciseData: Partial<ExerciseEntity>,
  ): Promise<ExerciseEntity | undefined> {
    return await this.exercisesService.updateExercise(id, exerciseData);
  }

  @Delete(':id')
  async deleteExercise(@Param('id') id: number): Promise<boolean> {
    return await this.exercisesService.deleteExercise(id);
  }

  // Additional methods
  @Get('hello')
  async getHello(): Promise<string> {
    return this.exercisesService.getHello();
  }
}

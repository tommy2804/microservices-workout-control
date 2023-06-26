import { Test, TestingModule } from '@nestjs/testing';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';

describe('ExercisesController', () => {
  let exercisesController: ExercisesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ExercisesController],
      providers: [ExercisesService],
    }).compile();

    exercisesController = app.get<ExercisesController>(ExercisesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(exercisesController.getHello()).toBe('Hello World!');
    });
  });
});

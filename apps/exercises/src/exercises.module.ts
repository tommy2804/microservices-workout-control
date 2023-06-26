import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import {
  PostgresDBModule,
  SharedModule,
  UserEntity,
  ExercisesRepository,
  FriendRequestEntity,
  ConversationEntity,
  MessageEntity,
} from '@app/shared';
import { ExerciseEntity } from '@app/shared/entities/exercise.entity';
import { WorkoutEntity } from '@app/shared/entities/workout.entity';
import { TrainerEntity } from '@app/shared/entities/trainer.entity';
import { TraineeEntity } from '@app/shared/entities/trainee.entity';

@Module({
  imports: [
    PostgresDBModule,
    SharedModule.registerRmq('AUTH_SERVICE', process.env.RABBITMQ_AUTH_QUEUE),
    SharedModule.registerRmq(
      'PRESENCE_SERVICE',
      process.env.RABBITMQ_PRESENCE_QUEUE,
    ),
    TypeOrmModule.forFeature([
      UserEntity,
      ExerciseEntity,
      WorkoutEntity,
      FriendRequestEntity,
      ConversationEntity,
      MessageEntity,
      TrainerEntity,
      TraineeEntity,
    ]),
  ],
  controllers: [ExercisesController],
  providers: [
    ExercisesService,
    {
      provide: 'ExercisesRepositoryInterface',
      useClass: ExercisesRepository,
    },
  ],
})
export class ExercisesModule {}

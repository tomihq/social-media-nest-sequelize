import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PostsModule } from '../posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostAnswers } from './entities/post-answers.entity';
import { PostsAnswersController } from './posts-answers.controller';
import { PostsAnswersService } from './posts-answers.service';

@Module({
  controllers: [PostsAnswersController],
  providers: [PostsAnswersService],
  imports: [TypeOrmModule.forFeature([PostAnswers]), AuthModule, PostsModule],
})
export class AnswersModule {}

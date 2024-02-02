import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PostsModule } from '../posts.module';
import { PostsAnswersController } from './posts-answers.controller';
import { PostsAnswersService } from './posts-answers.service';

@Module({
  controllers: [PostsAnswersController],
  providers: [PostsAnswersService],
  imports: [AuthModule, PostsModule],
})
export class AnswersModule {}

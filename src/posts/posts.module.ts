import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { AuthModule } from 'src/auth/auth.module';
import { PostRetweet } from './entities/retweet.entity';

@Module({
  controllers: [PostsController],
  imports: [TypeOrmModule.forFeature([Post, PostRetweet]), AuthModule],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}

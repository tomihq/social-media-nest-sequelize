import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Post } from './entities/post.entity';
import { AuthModule } from 'src/auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([Post]), AuthModule],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}

import { Controller, Post, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { Auth } from 'src/auth/decorators';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostsAnswersService } from './posts-answers.service';

@Controller('/posts/answers')
export class PostsAnswersController {
  constructor(private readonly postAnswersService: PostsAnswersService) {}

  @Post(':id')
  @Auth()
  create(
    @GetUser() user: User,
    @Param('id', ParseUUIDPipe) postId: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postAnswersService.create(user, postId, createPostDto);
  }
}

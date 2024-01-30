import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'src/auth/entities/user.entity';
import { PostsService } from '../posts.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostAnswers } from './entities/post-answers.entity';

@Injectable()
export class PostsAnswersService {
  constructor(
    @InjectRepository(PostAnswers)
    private readonly postAnswers: Repository<PostAnswers>,
    private readonly postService: PostsService,
  ) {}

  async create(user: User, postId: string, createPostDto: CreatePostDto) {
    try {
      const post = await this.postService.findOne(postId);
      if (!post) throw new NotFoundException(`Invalid post`);
      const createdPost = await this.postService.create(user, createPostDto);
      const postAnswerData = {
        user,
        post: {
          ...createdPost,
        },
      };
      const postAnswer = this.postAnswers.create(postAnswerData);
      const createdPostAnswer = await this.postAnswers.save(postAnswer);
      return {
        post: createdPostAnswer.post,
      };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  private handleExceptions(error: any) {
    console.log(error);
    throw new InternalServerErrorException(
      `Oops, something went wrong. Check server logs`,
    );
  }
}

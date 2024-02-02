import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'src/auth/entities/user.entity';
import { PostsService } from '../posts.service';
import { CreatePostDto } from '../dto/create-post.dto';

@Injectable()
export class PostsAnswersService {
  constructor(private readonly postService: PostsService) {}

  async create(user: User, postId: string, createPostDto: CreatePostDto) {
    // try {
    //   const post = await this.postService.findOne(postId);
    //   /* if (!post) throw new NotFoundException(`Invalid post`); */
    //   const createdPost = await this.postService.create(user, createPostDto);
    //   const postAnswerData = {
    //     user,
    //     post: {
    //       ...createdPost.post,
    //     },
    //   };
    //   /*  const postAnswer = this.postAnswersRepository.create(postAnswerData);
    //   const createdPostAnswer =
    //     await this.postAnswersRepository.save(postAnswer); */
    //   /*  return {
    //     post: createdPostAnswer.post,
    //   }; */
    // } catch (error) {
    //   this.handleExceptions(error);
    // }
  }

  private handleExceptions(error: any) {
    console.log(error);
    throw new InternalServerErrorException(
      `Oops, something went wrong. Check server logs`,
    );
  }
}

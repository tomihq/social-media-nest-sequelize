import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { User } from 'src/auth/entities/user.entity';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  logger = new Logger('posts');

  constructor(
    @InjectRepository(Post)
    private readonly postService: Repository<Post>,
  ) {}

  async create(user: User, createPostDto: CreatePostDto) {
    try {
      const post = {
        user,
        ...createPostDto,
      };
      const postInstance = this.postService.create(post);
      await this.postService.save(postInstance);
    } catch (error) {
      this.handleExceptions(error);
    }
    return true;
  }

  findAll() {
    return `This action returns all posts`;
  }

  async findOne(id: string) {
    const post = await this.postService.findOne({
      select: {
        id: true,
        body: true,
        attachments: true,
        created_at: true,
        updated_at: true,
      },
      where: { id },
    });
    if (!post) throw new NotFoundException(`Invalid Post`);
    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }

  private handleExceptions(error: any) {
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected Error. Check server logs',
    );
  }
}

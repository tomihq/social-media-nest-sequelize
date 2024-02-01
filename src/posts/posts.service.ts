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
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { getFormattedPagination } from 'src/common/helpers/get-formatted-pagination.helpers';

@Injectable()
export class PostsService {
  logger = new Logger('posts');

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(user: User, createPostDto: CreatePostDto) {
    try {
      const post = {
        user,
        ...createPostDto,
      };
      const postInstance = this.postRepository.create(post);
      await this.postRepository.save(postInstance);

      return {
        post: postInstance,
      };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { skip, take } = getFormattedPagination(paginationDto);
    const queryBuilder = this.postRepository.createQueryBuilder('posts');
    const posts = await queryBuilder
      .addOrderBy('posts.created_at', 'DESC')
      .leftJoin('posts.user', 'user')
      /* .loadRelationCountAndMap('posts.answers', 'posts.postsAnswers') */
      .addSelect(['user.username', 'user.fullName'])
      .offset(skip)
      .limit(take)
      .getMany(); /*getSql() te trae la consulta armada */

      
    return {
      posts,
      hasNextPage: posts.length >= take,
    };
  }

  async findOne(id: string) {
    const post = await this.postRepository.findOne({
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

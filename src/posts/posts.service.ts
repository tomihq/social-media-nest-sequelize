import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { User } from 'src/auth/entities/user.entity';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  
  constructor(
    @InjectRepository(Post)
    private readonly postService:Repository<Post>
  ){}
  
  async create(user: User, createPostDto: CreatePostDto) {
    try {
      const post = {
        user,
        ...createPostDto
      }
      const postInstance = this.postService.create(post);
      await this.postService.save(postInstance)
    } catch (error) {
      
    }
    return true; 
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}

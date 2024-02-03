import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';

/* Necesito que envíen lo mismo que cuando crean el Post */
export class CreateAnswerDto extends PartialType(CreatePostDto) {}

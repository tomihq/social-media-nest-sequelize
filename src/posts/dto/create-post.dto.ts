import { Optional } from '@nestjs/common';
import {
  IsArray,
  IsDate,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MinLength(1)
  @MaxLength(240)
  body: string;

  @IsArray()
  @IsString({ each: true })
  @Optional()
  attachments: string[];
}

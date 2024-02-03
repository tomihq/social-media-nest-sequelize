import { IsString, MinLength } from 'class-validator';

export class CreateRevalidateTagDto {
  @IsString()
  @MinLength(1)
  name: string;
}

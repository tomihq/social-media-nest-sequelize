import { PartialType } from '@nestjs/mapped-types';
import { CreateRevalidateTagDto } from './create-revalidate-tag.dto';

export class UpdateIsrDto extends PartialType(CreateRevalidateTagDto) {}

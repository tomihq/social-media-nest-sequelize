import { PartialType } from '@nestjs/mapped-types';
import { CreateRevalidatePathDto } from './create-revalidate-path.dto';

export class UpdateRevalidatePathDto extends PartialType(CreateRevalidatePathDto) {}

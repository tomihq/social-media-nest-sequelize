import { PartialType } from '@nestjs/mapped-types';
import { CreateIsrDto } from './create-isr.dto';

export class UpdateIsrDto extends PartialType(CreateIsrDto) {}

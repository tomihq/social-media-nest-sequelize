import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Type(() => Number) //Esto es lo que haría si ponemos en el main.ts el enableImplicitConversions: true
  limit?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number) //Esto es lo que haría si ponemos en el main.ts el enableImplicitConversions: true
  page?: number;
}
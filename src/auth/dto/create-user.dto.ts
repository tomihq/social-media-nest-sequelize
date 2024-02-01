import {
  IsEmail,
  IsLowercase,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  fullName: string;

  @IsString()
  @IsLowercase()
  @IsOptional()
  @MinLength(1)
  @MaxLength(12)
  username: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  description: string;

  @IsString()
  @IsOptional()
  avatarUrl: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a uppercase, lowercase letter and a number',
  })
  password: string;
}

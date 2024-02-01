import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/auth/entities/user.entity';
import { HobbiesModule } from './hobbies/hobbies.module';
import { Hobby } from './hobbies/entities/hobby.entity';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User, Hobby]), AuthModule, HobbiesModule],
  providers: [UsersService],
})
export class UsersModule {}

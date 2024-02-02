import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/auth/entities/user.entity';
import { Hobby } from '../hobbies/entities/hobby.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [UsersController],
  imports: [SequelizeModule.forFeature([User, Hobby]), AuthModule],
  providers: [UsersService],
})
export class UsersModule {}

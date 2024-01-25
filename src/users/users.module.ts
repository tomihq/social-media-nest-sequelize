import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/auth/entities/user.entity';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  providers: [UsersService],
})
export class UsersModule {}

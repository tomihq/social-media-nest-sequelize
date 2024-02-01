import { Module } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { HobbiesController } from './hobbies.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hobby } from './entities/hobby.entity';
import { User } from 'src/auth/entities/user.entity';

@Module({
  controllers: [HobbiesController],
  providers: [HobbiesService],
  imports: [AuthModule, TypeOrmModule.forFeature([User, Hobby])],
})
export class HobbiesModule {}

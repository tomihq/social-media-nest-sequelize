import { Module } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { HobbiesController } from './hobbies.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Hobby } from './entities/hobby.entity';
import { User } from 'src/auth/entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [HobbiesController],
  providers: [HobbiesService],
  imports: [AuthModule, SequelizeModule.forFeature([User, Hobby])],
})
export class HobbiesModule {}

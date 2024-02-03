import { Module } from '@nestjs/common';
import { Isr } from './entities/isr.entity';
import { RevalidateTagController } from './revalidate-tag.controller';
import { RevalidateTagService } from './revalidate-tag.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Isr])],
  controllers: [RevalidateTagController],
  providers: [RevalidateTagService],
})
export class RevalidateTagModule {}

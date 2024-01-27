import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Isr } from './entities/isr.entity';
import { RevalidateTagController } from './revalidate-tag.controller';
import { RevalidateTagService } from './revalidate-tag.service';

@Module({
  imports: [TypeOrmModule.forFeature([Isr])],
  controllers: [RevalidateTagController],
  providers: [RevalidateTagService],
})
export class RevalidateTagModule {}

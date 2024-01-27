import { Module } from '@nestjs/common';
import { IsrService } from './isr.service';
import { IsrController } from './isr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Isr } from './entities/isr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Isr])],
  controllers: [IsrController],
  providers: [IsrService],
})
export class IsrModule {}

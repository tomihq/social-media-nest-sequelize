import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IsrService } from './isr.service';
import { CreateIsrDto } from './dto/create-isr.dto';

@Controller('isr')
export class IsrController {
  constructor(private readonly isrService: IsrService) {}

  @Post()
  create(@Body() createIsrDto: CreateIsrDto) {
    return this.isrService.create(createIsrDto);
  }

  @Get()
  findLast() {
    return this.isrService.findLast();
  }
  

}

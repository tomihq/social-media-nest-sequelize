import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { CreateHobbyDto } from './dto/create-hobby.dto';
import { UpdateHobbyDto } from './dto/update-hobby.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { Auth } from 'src/auth/decorators';

@Controller('hobbies')
export class HobbiesController {
  constructor(private readonly hobbiesService: HobbiesService) {}

  @Post()
  @Auth()
  create(@GetUser() user: User, @Body() createHobbyDto: CreateHobbyDto) {
    return this.hobbiesService.create(user, createHobbyDto);
  }

  @Get()
  findAll() {
    return this.hobbiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hobbiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHobbyDto: UpdateHobbyDto) {
    return this.hobbiesService.update(+id, updateHobbyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hobbiesService.remove(+id);
  }
}

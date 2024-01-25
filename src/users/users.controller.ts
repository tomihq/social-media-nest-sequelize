import {
  Controller,
  Param,
  Delete,
  ParseUUIDPipe,
  Get,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ValidRoles } from 'src/auth/interfaces';
import { Auth } from 'src/auth/decorators';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(@Query() paginationDto: PaginationDto) {
    return this.usersService.getAll(paginationDto);
  }

  @Get(':id')
  getById(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.getById(id);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin)
  remove(
    @Param('id', ParseUUIDPipe) id: string,
    @GetUser() authenticatedUser: User,
  ) {
    return this.usersService.delete(id, authenticatedUser);
  }
}

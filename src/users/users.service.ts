import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { getFormattedPagination } from 'src/common/helpers/get-formatted-pagination.helpers';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAll(paginationDto: PaginationDto) {
    const { skip, take } = getFormattedPagination(paginationDto);
    const users = await this.userRepository.find({ skip, take });
    return users;
  }

  async getById(id: string): Promise<Omit<User, 'roles' | 'password'>> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(`Invalid User`);

    delete user.roles;
    delete user.isActive;

    return user;
  }

  async delete(id: string, authenticatedUser: User) {
    if (id === authenticatedUser.id)
      throw new BadRequestException(`You cannot delete your own user.`);
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new BadRequestException(`User with id ${id} does not exist.`);
    await this.userRepository.delete({ id });
    return true;
  }
}

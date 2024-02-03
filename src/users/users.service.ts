import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/auth/entities/user.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { getFormattedPagination } from 'src/common/helpers/get-formatted-pagination.helpers';
import { validate as isUUID } from 'uuid';

@Injectable()
export class UsersService {
  logger = new Logger('users');

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async getAll(paginationDto: PaginationDto) {
    const { skip, take } = getFormattedPagination(paginationDto);
   /*  const users = await this.userModel.find({ skip, take, relations: {
      posts: true
    } });
    console.log(users)
    return users; */
  }

  async getByTerm(term: string)/* : Promise<Omit<User, 'roles' | 'password'>> */ {
    /* const user = isUUID(term)
      ? await this.userModel.findOne({ where: { id: term } })
      : await this.userModel.findOne({ where: { username: term } });

    if (!user) throw new NotFoundException(`Invalid User`);

    delete user.roles;
    delete user.isActive;

    return user; */
  }

  async delete(id: string, authenticatedUser: User) {
   /*  if (id === authenticatedUser.id)
      throw new BadRequestException(`You cannot delete your own user.`);
    const user = await this.userModel.findOneBy({ id });
    if (!user)
      throw new BadRequestException(`User with id ${id} does not exist.`);
    await this.userModel.delete({ id });
    return true; */
  }
}

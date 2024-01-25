import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async delete(id: string, authenticatedUser: User) {
    if(id === authenticatedUser.id) throw new BadRequestException(`You cannot delete your own user.`)
    const user = await this.userRepository.findOneBy({id});
    if(!user) throw new BadRequestException(`User with id ${id} does not exist.`)
    await this.userRepository.delete({id});
    return true;
  }

}

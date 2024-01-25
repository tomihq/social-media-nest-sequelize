import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  
  logger = new Logger('auth');

  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>
  ){}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto)
      await this.userRepository.save(user);
      return 'This action adds a new auth';
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  handleExceptions(error: any){
    if(error.code === '23505') throw new BadRequestException(`${error.detail}`)

    throw new InternalServerErrorException(`Oops, something went wrong. Check server logs`)
  }

  
}

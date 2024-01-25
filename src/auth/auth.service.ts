import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
  
  logger = new Logger('auth');

  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>
  ){}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData} = createUserDto
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10)
      })
      await this.userRepository.save(user);
      return userData;
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  handleExceptions(error: any){
    if(error.code === '23505') throw new BadRequestException(`${error.detail}`)
    console.log(error)

    throw new InternalServerErrorException(`Oops, something went wrong. Check server logs`)
  }

  
}

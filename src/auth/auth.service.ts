import { BadRequestException, Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { LoginUserDto } from './dto';
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

  async login(loginUserDto: LoginUserDto){
    //Autentico haciendo findOne por email en DB. Luego obtengo esa password y veo si la password enviada hasheada es la misma que la base.
      const { email, password } = loginUserDto
      const user = await this.userRepository.findOne({where: {email}, select: {email: true, password: true}});
      const { password: dbPassword } = user; 
      if(!bcrypt.compareSync(password, dbPassword)) throw new UnauthorizedException();
      
      return true; 
  }

  handleExceptions(error: any){
    if(error.code === '23505') throw new BadRequestException(`${error.detail}`)
    console.log(error)

    throw new InternalServerErrorException(`Oops, something went wrong. Check server logs`)
  }

  
}

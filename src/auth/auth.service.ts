import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces';
import { MailService } from 'src/mail/mail.service';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class AuthService {
  logger = new Logger('auth');

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    // try {
    //   const { password, ...userData } = createUserDto;
    //   const user = this.userRepository.create({
    //     ...userData,
    //     password: bcrypt.hashSync(password, 10),
    //   });
    //   await this.userRepository.save(user);

    //   await this.mailService.sendMail();

    //   return {
    //     ...userData,
    //     token: this.getJwtToken({ id: user.id }),
    //   };
    // } catch (error) {
    //   this.handleExceptions(error);
    // }
  }

  async renewToken(user: User) {
    return {
      user: {
        email: user.email,
        token: this.getJwtToken({ id: user.id }),
      },
    };
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = await this.userModel.findOne({
      where: { email },
      attributes: ["id", "email", "password"],
      raw: true 
    });


    if (!user) throw new NotFoundException(`Invalid User`);
    const { password: dbPassword } = user;
    if (!bcrypt.compareSync(password, dbPassword))
      throw new UnauthorizedException();
    delete user.password;

    return {
      ...user,
      token: this.getJwtToken({ id: user.id }),
    };
  }

  private getJwtToken(payload: JwtPayload): string {
    const token = this.jwtService.sign(payload);
    return token;
  }

  handleExceptions(error: any) {
    if (error.code === '23505')
      throw new BadRequestException(`${error.detail}`);
    console.log(error);

    throw new InternalServerErrorException(
      `Oops, something went wrong. Check server logs`,
    );
  }
}

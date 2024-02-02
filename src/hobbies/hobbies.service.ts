import { Injectable } from '@nestjs/common';
import { CreateHobbyDto } from './dto/create-hobby.dto';
import { UpdateHobbyDto } from './dto/update-hobby.dto';
import { Hobby } from './entities/hobby.entity';
import { User } from 'src/auth/entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class HobbiesService {
  constructor(
    @InjectModel(Hobby)
    private hobbiesModel: typeof Hobby,
    @InjectModel(User)
    private  userModel: typeof User,
  ) {}

  async create(user: User, createHobbyDto: CreateHobbyDto) {
    // const hobby = this.hobbiesRepository.create(createHobbyDto);
    // const createdHobby = await this.hobbiesRepository.save(hobby);
    // // ¡Esto deberia estar en un servicio de user-hobbies!
    // user.hobbies = user.hobbies || [];
    // user.hobbies.push(createdHobby);
    // this.userRepository.save(user);
    // //
    // return createdHobby
  }

  findAll() {
    return `This action returns all hobbies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hobby`;
  }

  update(id: number, updateHobbyDto: UpdateHobbyDto) {
    return `This action updates a #${id} hobby`;
  }

  remove(id: number) {
    return `This action removes a #${id} hobby`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateHobbyDto } from './dto/create-hobby.dto';
import { UpdateHobbyDto } from './dto/update-hobby.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hobby } from './entities/hobby.entity';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class HobbiesService {
  constructor(
    @InjectRepository(Hobby)
    private readonly hobbiesRepository: Repository<Hobby>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User, createHobbyDto: CreateHobbyDto) {
    const hobby = this.hobbiesRepository.create(createHobbyDto);
    const createdHobby = await this.hobbiesRepository.save(hobby);
    // ¡Esto deberia estar en un servicio de user-hobbies!
    user.hobbies = user.hobbies || [];
    user.hobbies.push(createdHobby);
    this.userRepository.save(user);
    //
    return 'This action adds a new hobby';
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

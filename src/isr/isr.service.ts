import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateIsrDto } from './dto/create-isr.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Isr } from './entities/isr.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IsrService {

  logger = new Logger('isr')

  constructor(
    @InjectRepository(Isr)
    private readonly isr:Repository<Isr>
  ){}

  async create(createIsrDto: CreateIsrDto) {
    try {
      const isrUser = this.isr.create(createIsrDto)
      await this.isr.save(isrUser)
      return isrUser
    } catch (error) {
        this.handleExceptions(error)
    }
  }

  
  async findLast():Promise<{ok: boolean, user: Isr | null}> {
    const [user = null] = await this.isr.find({order: { 
      id: -1
    }, take: 1})
    return {
      ok: true,
      user: user
    };
  }

  private handleExceptions(error: any) {
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected Error. Check server logs',
    );
  }

}

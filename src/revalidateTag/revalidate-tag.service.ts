import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Isr } from './entities/isr.entity';
import { CreateRevalidateTagDto } from './dto/create-revalidate-tag.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RevalidateTagService {
  logger = new Logger('revalidateTag');

  constructor(
    @InjectModel(Isr)
    private isrModel: typeof Isr,
  ) {}

  async create(createRevalidateTagDto: CreateRevalidateTagDto) {
   /*  try {
      const isrUser = this.isrRepository.create(createRevalidateTagDto);
      await this.isrRepository.save(isrUser);
      await this.revalidate();
      return isrUser;
    } catch (error) {
      this.handleExceptions(error);
    } */
  }

  async findLast()/* : Promise<{ ok: boolean; user: Isr | null }> */ {
   /*  const [user = null] = await this.isrRepository.find({
      order: {
        id: -1,
      },
      take: 1,
    });
    return {
      ok: true,
      user: user,
    };
  }

  async revalidate() {
    const request = await fetch(
      `${process.env.NEXT_URL}/api/revalidate?tag=on-demand-cached-page`,
      {
        headers: {
          NEXT_SECRET_REVALIDATE_KEY: process.env.NEXT_SECRET_REVALIDATE_KEY,
        },
      },
    );
    const response = await request.json();
    return response; */
  }

  private handleExceptions(error: any) {
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected Error. Check server logs',
    );
  }
}

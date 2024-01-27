import { Controller, Get, Post, Body} from '@nestjs/common';
import { CreateRevalidateTagDto } from './dto/create-revalidate-tag.dto';
import { RevalidateTagService } from './revalidate-tag.service';

@Controller('revalidateTag')
export class RevalidateTagController {
  constructor(private readonly revalidateTagService: RevalidateTagService) {}

  @Post()
  create(@Body() createRevalidateTagDto: CreateRevalidateTagDto) {
    return this.revalidateTagService.create(createRevalidateTagDto);
  }

  @Get()
  findLast() {
    return this.revalidateTagService.findLast();
  }

  

}

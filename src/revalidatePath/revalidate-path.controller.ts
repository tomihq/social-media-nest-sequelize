import { Controller, Get } from '@nestjs/common';
import { RevalidatePathService } from './revalidate-path.service';

@Controller('revalidatePath')
export class RevalidatePathController {
  constructor(private readonly revalidatePathService: RevalidatePathService) {}
  
  @Get('/random')
  getRandom(){
    return this.revalidatePathService.getRandom();
  }

  @Get()
  revalidatePath() {
    return this.revalidatePathService.revalidatePath();
  }
}

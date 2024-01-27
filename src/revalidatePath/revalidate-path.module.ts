import { Module } from '@nestjs/common';
import { RevalidatePathService } from './revalidate-path.service';
import { RevalidatePathController } from './revalidate-path.controller';

@Module({
  controllers: [RevalidatePathController],
  providers: [RevalidatePathService],
})
export class RevalidatePathModule {}

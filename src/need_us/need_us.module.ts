import { Module } from '@nestjs/common';
import { NeedUsService } from './need_us.service';
import { NeedUsResolver } from './need_us.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NeedUs } from './entities/need_us.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NeedUs])],
  providers: [NeedUsResolver, NeedUsService],
})
export class NeedUsModule {}

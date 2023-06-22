import { Module } from '@nestjs/common';
import { DivisiService } from './divisi.service';
import { DivisiResolver } from './divisi.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Divisi } from './entities/divisi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Divisi])],
  providers: [DivisiResolver, DivisiService],
})
export class DivisiModule {}

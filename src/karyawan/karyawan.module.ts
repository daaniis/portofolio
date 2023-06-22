import { Module } from '@nestjs/common';
import { KaryawanService } from './karyawan.service';
import { KaryawanResolver } from './karyawan.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Karyawan } from './entities/karyawan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Karyawan])],
  providers: [KaryawanResolver, KaryawanService],
})
export class KaryawanModule {}

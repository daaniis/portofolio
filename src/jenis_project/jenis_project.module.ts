import { Module } from '@nestjs/common';
import { JenisProjectService } from './jenis_project.service';
import { JenisProjectResolver } from './jenis_project.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JenisProject } from './entities/jenis_project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JenisProject])],
  providers: [JenisProjectResolver, JenisProjectService],
})
export class JenisProjectModule {}

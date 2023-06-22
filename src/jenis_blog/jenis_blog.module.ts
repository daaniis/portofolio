import { Module } from '@nestjs/common';
import { JenisBlogService } from './jenis_blog.service';
import { JenisBlogResolver } from './jenis_blog.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JenisBlog } from './entities/jenis_blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JenisBlog])],
  providers: [JenisBlogResolver, JenisBlogService],
})
export class JenisBlogModule {}

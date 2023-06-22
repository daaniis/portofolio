import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJenisBlogInput } from './dto/create-jenis_blog.input';
import { UpdateJenisBlogInput } from './dto/update-jenis_blog.input';
import { InjectRepository } from '@nestjs/typeorm';
import { JenisBlog } from './entities/jenis_blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JenisBlogService {
  constructor(
    @InjectRepository(JenisBlog)
    private readonly jenisblogRepository: Repository<JenisBlog>,
  ) {}

  async create(createJenisBlogInput: CreateJenisBlogInput): Promise<JenisBlog> {
    const jenisblog = this.jenisblogRepository.create(createJenisBlogInput);
    return await this.jenisblogRepository.save(jenisblog);
  }

  async findAll(): Promise<Array<JenisBlog>> {
    return await this.jenisblogRepository.find();
  }

  async findOne(id_jenisblog: number): Promise<JenisBlog> {
    const jenisblog = this.jenisblogRepository.findOne({
      where: { id_jenisblog },
    });
    if (!jenisblog) {
      throw new NotFoundException('Data Tidak Ditemukan!');
    }
    return jenisblog;
  }

  async update(
    id_jenisblog: number,
    updateJenisBlogInput: UpdateJenisBlogInput,
  ): Promise<JenisBlog> {
    const jenisblog = await this.jenisblogRepository.preload({
      id_jenisblog: id_jenisblog,
      ...updateJenisBlogInput,
    });
    if (!jenisblog) {
      throw new NotFoundException('Data Tidak Ditemukan');
    }
    return this.jenisblogRepository.save(jenisblog);
  }

  async remove(id_jenisblog: number): Promise<JenisBlog> {
    const jenisblog = await this.findOne(id_jenisblog);
    await this.jenisblogRepository.remove(jenisblog);
    return {
      id_jenisblog: id_jenisblog,
      bidang_jenisblog: '',
      blog: jenisblog.blog,
      createAt: jenisblog.createAt,
      updateAt: jenisblog.updateAt,
    };
  }
}

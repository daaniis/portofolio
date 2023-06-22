import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogInput } from './dto/create-blog.input';
import { UpdateBlogInput } from './dto/update-blog.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
  ) {}

  async create(createBlogInput: CreateBlogInput): Promise<Blog> {
    const blog = this.blogRepository.create(createBlogInput);
    return await this.blogRepository.save(blog);
  }

  async findAll(): Promise<Array<Blog>> {
    return await this.blogRepository.find({ relations: ['jenisblog'] });
  }

  async findOne(id_blog: number): Promise<Blog> {
    const blog = this.blogRepository.findOne({ where: { id_blog } });
    if (!blog) {
      throw new NotFoundException('Data Tidak Ditemukan!');
    }
    return blog;
  }

  async update(
    id_blog: number,
    updateBlogInput: UpdateBlogInput,
  ): Promise<Blog> {
    const blog = await this.blogRepository.preload({
      id_blog: id_blog,
      ...updateBlogInput,
    });
    if (!blog) {
      throw new NotFoundException('Data Tidak Ditemukan!');
    }
    return this.blogRepository.save(blog);
  }

  async remove(id_blog: number): Promise<Blog> {
    const blog = await this.findOne(id_blog);
    await this.blogRepository.remove(blog);
    return {
      id_blog: id_blog,
      tanggal: '',
      judul: '',
      isi: '',
      author: '',
      gambar: '',
      id_jenisblog: blog.id_jenisblog,
      createAt: blog.createAt,
      updateAt: blog.updateAt,
    };
  }
}

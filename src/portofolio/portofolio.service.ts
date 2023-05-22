import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePortofolioInput } from './dto/create-portofolio.input';
import { UpdatePortofolioInput } from './dto/update-portofolio.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Portofolio } from './entities/portofolio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PortofolioService {
  constructor(
    @InjectRepository(Portofolio)
    private readonly portoRepository: Repository<Portofolio>,
  ) {}

  async create(
    createPortofolioInput: CreatePortofolioInput,
  ): Promise<Portofolio> {
    const porto = this.portoRepository.create(createPortofolioInput);
    return await this.portoRepository.save(porto);
  }

  async findAll(): Promise<Array<Portofolio>> {
    return await this.portoRepository.find();
  }

  async findOne(id_portofolio: number): Promise<Portofolio> {
    const porto = this.portoRepository.findOne({ where: { id_portofolio } });
    if (!porto) {
      throw new NotFoundException('Portofolio Tidak Ditemukan!');
    }
    return porto;
  }

  async update(
    id_portofolio: number,
    updatePortofolioInput: UpdatePortofolioInput,
  ): Promise<Portofolio> {
    const porto = await this.portoRepository.preload({
      id_portofolio: id_portofolio,
      ...updatePortofolioInput,
    });
    if (!porto) {
      throw new NotFoundException('Portofolio Tidak Ditemukan');
    }
    return this.portoRepository.save(porto);
  }
  async remove(id_portofolio: number): Promise<Portofolio> {
    const porto = await this.findOne(id_portofolio);
    await this.portoRepository.remove(porto);
    return {
      id_portofolio: id_portofolio,
      nama_instansi: '',
      jenis_project: '',
      judul_project: '',
      isi_project: '',
    };
  }
}

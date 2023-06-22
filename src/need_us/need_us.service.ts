import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNeedUsInput } from './dto/create-need_us.input';
import { UpdateNeedUsInput } from './dto/update-need_us.input';
import { InjectRepository } from '@nestjs/typeorm';
import { NeedUs } from './entities/need_us.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NeedUsService {
  constructor(
    @InjectRepository(NeedUs)
    private readonly needusRepository: Repository<NeedUs>,
  ) {}
  async create(createNeedUsInput: CreateNeedUsInput): Promise<NeedUs> {
    const needus = this.needusRepository.create(createNeedUsInput);
    return await this.needusRepository.save(needus);
  }

  async findAll(): Promise<Array<NeedUs>> {
    return await this.needusRepository.find();
  }

  async findOne(id_needus: number): Promise<NeedUs> {
    const needus = this.needusRepository.findOne({ where: { id_needus } });
    if (!needus) {
      throw new NotFoundException('Data Tidak Ditemukan!');
    }
    return needus;
  }

  async update(
    id_needus: number,
    updateNeedUsInput: UpdateNeedUsInput,
  ): Promise<NeedUs> {
    const needus = await this.needusRepository.preload({
      id_needus: id_needus,
      ...updateNeedUsInput,
    });
    if (!needus) {
      throw new NotFoundException('Data Tidak Ditemukan');
    }
    return this.needusRepository.save(needus);
  }

  async remove(id_needus: number): Promise<NeedUs> {
    const needus = await this.findOne(id_needus);
    await this.needusRepository.remove(needus);
    return {
      id_needus: id_needus,
      nama: '',
      email: '',
      nohp: needus.nohp,
      judul_project: '',
      jenis_project: '',
      tentang_project: '',
      createAt: needus.createAt,
      updateAt: needus.updateAt,
    };
  }
}

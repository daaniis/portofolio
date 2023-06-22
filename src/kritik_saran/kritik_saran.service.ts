import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKritikSaranInput } from './dto/create-kritik_saran.input';
import { UpdateKritikSaranInput } from './dto/update-kritik_saran.input';
import { InjectRepository } from '@nestjs/typeorm';
import { KritikSaran } from './entities/kritik_saran.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KritikSaranService {
  constructor(
    @InjectRepository(KritikSaran)
    private readonly kritiksaranRepository: Repository<KritikSaran>,
  ) {}

  async create(
    createKritikSaranInput: CreateKritikSaranInput,
  ): Promise<KritikSaran> {
    const kritiksaran = this.kritiksaranRepository.create(
      createKritikSaranInput,
    );
    return await this.kritiksaranRepository.save(kritiksaran);
  }

  async findAll(): Promise<Array<KritikSaran>> {
    return await this.kritiksaranRepository.find();
  }

  findOne(id_kritiksaran: number): Promise<KritikSaran> {
    const kritiksaran = this.kritiksaranRepository.findOne({
      where: { id_kritiksaran },
    });
    if (!kritiksaran) {
      throw new NotFoundException('Data Tidak Ditemukan');
    }
    return kritiksaran;
  }

  async update(
    id_kritiksaran: number,
    updateKritikSaranInput: UpdateKritikSaranInput,
  ): Promise<KritikSaran> {
    const kritiksaran = await this.kritiksaranRepository.preload({
      id_kritiksaran: id_kritiksaran,
      ...updateKritikSaranInput,
    });
    if (!kritiksaran) {
      throw new NotFoundException('Data Tidak DItemukan');
    }
    return this.kritiksaranRepository.save(kritiksaran);
  }

  async remove(id_kritiksaran: number): Promise<KritikSaran> {
    const kritiksaran = await this.findOne(id_kritiksaran);
    await this.kritiksaranRepository.remove(kritiksaran);
    return {
      id_kritiksaran: id_kritiksaran,
      nama: '',
      email: '',
      kritiksaran: '',
      createAt: kritiksaran.createAt,
      updateAt: kritiksaran.updateAt,
    };
  }
}

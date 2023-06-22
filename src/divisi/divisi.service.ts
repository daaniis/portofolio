import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDivisiInput } from './dto/create-divisi.input';
import { UpdateDivisiInput } from './dto/update-divisi.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Divisi } from './entities/divisi.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DivisiService {
  constructor(
    @InjectRepository(Divisi)
    private readonly divisiRepository: Repository<Divisi>,
  ) {}

  async create(createDivisiInput: CreateDivisiInput): Promise<Divisi> {
    const divisi = this.divisiRepository.create(createDivisiInput);
    return await this.divisiRepository.save(divisi);
  }

  async findAll(): Promise<Array<Divisi>> {
    return await this.divisiRepository.find();
  }

  async findOne(id_divisi: number): Promise<Divisi> {
    const divisi = this.divisiRepository.findOne({ where: { id_divisi } });
    if (!divisi) {
      throw new NotFoundException('Divisi Tidak Ditemukan!');
    }
    return divisi;
  }

  async update(
    id_divisi: number,
    updateDivisiInput: UpdateDivisiInput,
  ): Promise<Divisi> {
    const divisi = await this.divisiRepository.preload({
      id_divisi: id_divisi,
      ...updateDivisiInput,
    });
    if (!divisi) {
      throw new NotFoundException('Data Tidak Ditemukan!');
    }
    return this.divisiRepository.save(divisi);
  }

  async remove(id_divisi: number): Promise<Divisi> {
    const divisi = await this.findOne(id_divisi);
    await this.divisiRepository.remove(divisi);
    return {
      id_divisi: id_divisi,
      nama_divisi: '',
      karyawan: divisi.karyawan,
      createAt: divisi.createAt,
      updateAt: divisi.updateAt,
    };
  }
}

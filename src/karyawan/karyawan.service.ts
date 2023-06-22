import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKaryawanInput } from './dto/create-karyawan.input';
import { UpdateKaryawanInput } from './dto/update-karyawan.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Karyawan } from './entities/karyawan.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KaryawanService {
  constructor(
    @InjectRepository(Karyawan)
    private readonly karyawanRepository: Repository<Karyawan>,
  ) {}

  async create(createKaryawanInput: CreateKaryawanInput): Promise<Karyawan> {
    const karyawan = this.karyawanRepository.create(createKaryawanInput);
    return await this.karyawanRepository.save(karyawan);
  }

  async findAll(): Promise<Array<Karyawan>> {
    return await this.karyawanRepository.find({
      relations: ['divisi'],
    });
  }

  async findOne(id_karyawan: number): Promise<Karyawan> {
    const karyawan = this.karyawanRepository.findOne({
      where: { id_karyawan },
    });
    if (!karyawan) {
      throw new NotFoundException('Karyawan Tidak Ditemukan!');
    }
    return karyawan;
  }

  async update(
    id_karyawan: number,
    updateKaryawanInput: UpdateKaryawanInput,
  ): Promise<Karyawan> {
    const karyawan = await this.karyawanRepository.preload({
      id_karyawan: id_karyawan,
      ...updateKaryawanInput,
    });
    if (!karyawan) {
      throw new NotFoundException('Karyawan Tidak Ditemukan');
    }
    return this.karyawanRepository.save(karyawan);
  }

  async remove(id_karyawan: number): Promise<Karyawan> {
    const karyawan = await this.findOne(id_karyawan);
    await this.karyawanRepository.remove(karyawan);
    return {
      id_karyawan: id_karyawan,
      nama_karyawan: '',
      usia_karyawan: karyawan.usia_karyawan,
      gambar: '',
      id_divisi: karyawan.id_divisi,
      divisi: karyawan.divisi,
      createAt: karyawan.createAt,
      updateAt: karyawan.updateAt,
    };
  }
}

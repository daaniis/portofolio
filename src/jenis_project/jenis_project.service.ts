import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJenisProjectInput } from './dto/create-jenis_project.input';
import { UpdateJenisProjectInput } from './dto/update-jenis_project.input';
import { InjectRepository } from '@nestjs/typeorm';
import { JenisProject } from './entities/jenis_project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JenisProjectService {
  constructor(
    @InjectRepository(JenisProject)
    private readonly jenisprojectRepository: Repository<JenisProject>,
  ) {}

  async create(
    createJenisProjectInput: CreateJenisProjectInput,
  ): Promise<JenisProject> {
    const jenisproject = this.jenisprojectRepository.create(
      createJenisProjectInput,
    );
    return await this.jenisprojectRepository.save(jenisproject);
  }

  async findAll(): Promise<Array<JenisProject>> {
    return await this.jenisprojectRepository.find();
  }

  async findOne(id_jenisproject: number): Promise<JenisProject> {
    const jenisproject = this.jenisprojectRepository.findOne({
      where: { id_jenisproject },
    });
    if (!jenisproject) {
      throw new NotFoundException('Data Tidak Ditemukan!');
    }
    return jenisproject;
  }

  async update(
    id_jenisproject: number,
    updateJenisProjectInput: UpdateJenisProjectInput,
  ): Promise<JenisProject> {
    const jenisproject = await this.jenisprojectRepository.preload({
      id_jenisproject: id_jenisproject,
      ...updateJenisProjectInput,
    });
    if (!jenisproject) {
      throw new NotFoundException('Data Tidak Ditemukan');
    }
    return this.jenisprojectRepository.save(jenisproject);
  }

  async remove(id_jenisproject: number): Promise<JenisProject> {
    const jenisproject = await this.findOne(id_jenisproject);
    await this.jenisprojectRepository.remove(jenisproject);
    return {
      id_jenisproject: id_jenisproject,
      bidang_project: '',
      client: jenisproject.client,
      portofolio: jenisproject.portofolio,
      createAt: jenisproject.createAt,
      updateAt: jenisproject.updateAt,
    };
  }
}

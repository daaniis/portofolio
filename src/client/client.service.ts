import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(createClientInput: CreateClientInput): Promise<Client> {
    const client = this.clientRepository.create(createClientInput);
    return await this.clientRepository.save(client);
  }

  async findAll(): Promise<Array<Client>> {
    return await this.clientRepository.find({ relations: ['jenisproject'] });
  }

  async findOne(id_client: number): Promise<Client> {
    const client = this.clientRepository.findOne({ where: { id_client } });
    if (!client) {
      throw new NotFoundException('Client Tidak Ditemukan!');
    }
    return client;
  }

  async update(
    id_client: number,
    updateClientInput: UpdateClientInput,
  ): Promise<Client> {
    const client = await this.clientRepository.preload({
      id_client: id_client,
      ...updateClientInput,
    });
    if (!client) {
      throw new NotFoundException('Client Tidak Ditemukan');
    }
    return this.clientRepository.save(client);
  }

  async remove(id_client: number): Promise<Client> {
    const client = await this.findOne(id_client);
    await this.clientRepository.remove(client);
    return {
      id_client: id_client,
      nama: '',
      umur: client.umur,
      asal_instansi: '',
      jabatan: '',
      testimoni: '',
      gambar_logo: '',
      gambar_wajah: '',
      id_jenisproject: client.id_jenisproject,
      portofolio: client.portofolio,
      createAt: client.createAt,
      updateAt: client.updateAt,
    };
  }
}

/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Client } from 'src/client/entities/client.entity';
import { JenisProject } from 'src/jenis_project/entities/jenis_project.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'app_portof' })
@ObjectType()
export class Portofolio {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_portofolio: number;

  @Column()
  @Field(() => String, { description: 'merupakan nama instansi' })
  @IsNotEmpty()
  nama_instansi: string;

  @Column()
  @Field(() => String, { description: 'merupakan judul project' })
  judul_project: string;

  @Column({ type: 'bigint' })
  @Field(() => Int, { description: 'merupakan tahun dimana project ini launching' })
  tahun: number;

  @Column()
  @Field(() => String, { description: 'merupakan deskripsi singkat project' })
  isi_project: string;

  @Column()
  @Field(() => String, { description: 'merupakan gambar project' })
  gambar: string;

  @Column()
  @Field(() => Int)
  id_client: number;

  @Column()
  @Field(() => Int)
  id_jenisproject: number;

  @ManyToOne(() => Client, (client) => client.portofolio)
  @JoinColumn({ name: 'id_client' })
  @Field(() => Client, { nullable: true })
  client?: Client;

  @ManyToOne(() => JenisProject, (jenisproject) => jenisproject.portofolio)
  @JoinColumn({ name: 'id_jenisproject' })
  @Field(() => JenisProject, { nullable: true })
  jenisproject?: JenisProject;

  @Column()
  @UpdateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}

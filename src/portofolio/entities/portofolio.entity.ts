/* eslint-disable prettier/prettier */
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'portofolio' })
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
  @Field(() => String, { description: 'merupakan jenis project -> mobile/website' })
  jenis_project: string;

  @Column()
  @Field(() => String, { description: 'merupakan judul project' })
  judul_project: string;

  @Column()
  @Field(() => String, { description: 'merupakan deskripsi singkat project' })
  isi_project: string;
}

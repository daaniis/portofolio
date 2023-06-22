import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { JenisProject } from 'src/jenis_project/entities/jenis_project.entity';
import { Portofolio } from 'src/portofolio/entities/portofolio.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'app_client' })
@ObjectType()
export class Client {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_client: number;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  nama: string;

  @Column()
  @Field(() => Int)
  umur: number;

  @Column()
  @Field(() => String)
  asal_instansi: string;

  @Column()
  @Field(() => String)
  jabatan: string;

  @Column()
  @Field(() => String)
  testimoni: string;

  @Column()
  @Field(() => String, { description: 'merupakan gambar logo' })
  gambar_logo: string;

  @Column()
  @Field(() => String, { description: 'merupakan gambar wajah orang' })
  gambar_wajah: string;

  @Column()
  @Field(() => Int)
  id_jenisproject: number;

  @ManyToMany(() => JenisProject, (jenisproject) => jenisproject.client)
  @JoinTable({ name: 'id_jenisproject' })
  @Field(() => JenisProject, { nullable: true })
  jenisproject?: JenisProject;

  @OneToMany(() => Portofolio, (portofolio) => portofolio.client)
  @JoinColumn()
  @Field(() => [Portofolio])
  portofolio: Portofolio[];

  @Column()
  @UpdateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}

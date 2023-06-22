import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Divisi } from 'src/divisi/entities/divisi.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'app_karyawan' })
@ObjectType()
export class Karyawan {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_karyawan: number;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  nama_karyawan: string;

  // @Column()
  // @Field(() => String)
  // divisi_karyawan: string;

  @Column()
  @Field(() => Int)
  usia_karyawan: number;

  @Column()
  @Field(() => String, { description: 'merupakan foto karyawan' })
  gambar: string;

  @Column()
  @Field(() => Int)
  id_divisi: number;

  @ManyToOne(() => Divisi, (divisi) => divisi.karyawan)
  @JoinColumn({ name: 'id_divisi' })
  @Field(() => Divisi, { nullable: true })
  divisi?: Divisi;

  @Column()
  @UpdateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}

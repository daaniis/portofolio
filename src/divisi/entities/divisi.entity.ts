import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Karyawan } from 'src/karyawan/entities/karyawan.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'app_divisi' })
@ObjectType()
export class Divisi {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_divisi: number;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  nama_divisi: string;

  @OneToMany(() => Karyawan, (karyawan) => karyawan.divisi)
  @JoinColumn()
  @Field(() => [Karyawan])
  karyawan: Karyawan[];

  @Column()
  @UpdateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'app_needus' })
@ObjectType()
export class NeedUs {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_needus: number;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  nama: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => Int)
  nohp: number;

  @Column()
  @Field(() => String)
  judul_project: string;

  @Column()
  @Field(() => String)
  jenis_project: string;

  @Column()
  @Field(() => String)
  tentang_project: string;

  @Column()
  @UpdateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}

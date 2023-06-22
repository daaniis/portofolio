import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Client } from 'src/client/entities/client.entity';
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

@Entity({ name: 'app_jenisproject' })
@ObjectType()
export class JenisProject {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_jenisproject: number;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  bidang_project: string;

  @ManyToMany(() => Client, (client) => client.jenisproject)
  @JoinTable()
  @Field(() => [Client])
  client: Client[];

  @OneToMany(() => Portofolio, (portofolio) => portofolio.jenisproject)
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

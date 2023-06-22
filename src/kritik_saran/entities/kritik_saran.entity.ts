import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'app_kritiksaran' })
@ObjectType()
export class KritikSaran {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id_kritiksaran: number;

  @Column()
  @Field(() => String)
  @IsNotEmpty()
  nama: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  kritiksaran: string;

  @Column()
  @UpdateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}

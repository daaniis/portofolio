import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'app_users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  userId: number;

  @Column({ unique: true })
  @Field(() => String, { description: 'username user' })
  username: string;

  @Column({ unique: true })
  @Field(() => String, { description: 'email user' })
  email: string;

  @Column({ type: 'bigint' })
  @Field(() => Int, { description: 'nomor hp user', nullable: true })
  nohp: number;

  @Column()
  @Field(() => String, { description: 'password user' })
  password: string;

  // @Column()
  @Field({ nullable: true })
  token?: string;

  @Column()
  @UpdateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}

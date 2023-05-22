import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'app_users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  userId: number;

  @Column()
  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  username: string;

  @Column()
  @Field(() => String, { description: 'email user' })
  email: string;

  @Column()
  @Field(() => Int, { description: 'nomor hp user' })
  nohp: number;

  @Column()
  @Field(() => String, { description: 'password user' })
  password: string;
}

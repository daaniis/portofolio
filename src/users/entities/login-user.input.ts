/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class LoginUserInput {
  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;
}

import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  username: string;

  @Field(() => String, { description: 'email user' })
  @IsNotEmpty()
  email: string;

  @Field(() => Int, { description: 'nomor hp user' })
  @IsNotEmpty()
  nohp: number;

  @Field(() => String, { description: 'password user' })
  @IsNotEmpty()
  password: string;
}

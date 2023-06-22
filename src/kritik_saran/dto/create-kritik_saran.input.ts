import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateKritikSaranInput {
  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  nama: string;

  @Field(() => String, { description: 'email user' })
  @IsNotEmpty()
  email: string;

  @Field(() => String, { description: 'password user' })
  @IsNotEmpty()
  kritiksaran: string;
}

import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateDivisiInput {
  @Field(() => String)
  @IsNotEmpty()
  nama_divisi: string;
}

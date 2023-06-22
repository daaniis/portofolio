import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateJenisBlogInput {
  @Field(() => String)
  @IsNotEmpty()
  bidang_jenisblog: string;
}

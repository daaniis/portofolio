import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateJenisProjectInput {
  @Field(() => String)
  @IsNotEmpty()
  bidang_project: string;
}

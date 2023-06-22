import { CreateDivisiInput } from './create-divisi.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDivisiInput extends PartialType(CreateDivisiInput) {
  @Field(() => Int)
  id_divisi: number;
}

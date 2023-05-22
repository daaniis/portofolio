/* eslint-disable prettier/prettier */
import { CreatePortofolioInput } from './create-portofolio.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePortofolioInput extends PartialType(CreatePortofolioInput) {
  @Field(() => Int)
  id_portofolio: number;
}

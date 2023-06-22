import { CreateJenisProjectInput } from './create-jenis_project.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJenisProjectInput extends PartialType(
  CreateJenisProjectInput,
) {
  @Field(() => Int)
  id_jenisproject: number;
}

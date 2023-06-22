import { CreateKaryawanInput } from './create-karyawan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateKaryawanInput extends PartialType(CreateKaryawanInput) {
  @Field(() => Int)
  id_karyawan: number;
}

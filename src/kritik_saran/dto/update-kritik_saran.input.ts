import { CreateKritikSaranInput } from './create-kritik_saran.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateKritikSaranInput extends PartialType(
  CreateKritikSaranInput,
) {
  @Field(() => Int)
  id_kritiksaran: number;
}

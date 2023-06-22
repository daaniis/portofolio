import { CreateNeedUsInput } from './create-need_us.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNeedUsInput extends PartialType(CreateNeedUsInput) {
  @Field(() => Int)
  id_needus: number;
}

import { CreateJenisBlogInput } from './create-jenis_blog.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJenisBlogInput extends PartialType(CreateJenisBlogInput) {
  @Field(() => Int)
  id_jenisblog: number;
}

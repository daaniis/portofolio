import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateBlogInput {
  @Field(() => String)
  @IsNotEmpty()
  judul: string;

  @Field(() => String)
  @IsNotEmpty()
  tanggal: string;

  @Field(() => String)
  @IsNotEmpty()
  isi: string;

  @Field(() => String)
  @IsNotEmpty()
  author: string;

  @Field(() => String)
  @IsNotEmpty()
  gambar: string;

  @Field(() => Int)
  @IsNotEmpty()
  id_jenisblog: number;
}

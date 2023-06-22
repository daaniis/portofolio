import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateNeedUsInput {
  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  nama: string;

  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  email: string;

  @Field(() => Int, { description: 'nomor hp user' })
  @IsNotEmpty()
  nohp: number;

  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  judul_project: string;

  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  jenis_project: string;

  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  tentang_project: string;
}

import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateClientInput {
  @Field(() => String, { description: 'username user' })
  @IsNotEmpty()
  nama: string;

  @Field(() => Int)
  @IsNotEmpty()
  umur: number;

  @Field(() => String)
  @IsNotEmpty()
  asal_instansi: string;

  @Field(() => String)
  @IsNotEmpty()
  jabatan: string;

  @Field(() => String)
  @IsNotEmpty()
  testimoni: string;

  @Field(() => String, { description: 'gambar logo' })
  @IsNotEmpty()
  gambar_logo: string;

  @Field(() => String, { description: 'gambar wajah' })
  @IsNotEmpty()
  gambar_wajah: string;

  @Field(() => Int)
  @IsNotEmpty()
  id_jenisproject: number;
}

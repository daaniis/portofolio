import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateKaryawanInput {
  @Field(() => String)
  @IsNotEmpty()
  nama_karyawan: string;

  // @Field(() => String)
  // @IsNotEmpty()
  // divisi_karyawan: string;

  @Field(() => Int)
  @IsNotEmpty()
  usia_karyawan: number;

  @Field(() => String)
  @IsNotEmpty()
  gambar: string;

  @Field(() => Int)
  @IsNotEmpty()
  id_divisi: number;
}

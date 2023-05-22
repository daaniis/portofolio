/* eslint-disable prettier/prettier */
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePortofolioInput {
  @Field(() => String, { description: 'merupakan nama instansi' })
  @IsNotEmpty()
  nama_instansi: string;

  @Field(() => String, { description: 'merupakan jenis project -> mobile/website' })
  @IsNotEmpty()
  jenis_project: string;

  @Field(() => String, { description: 'merupakan judul project' })
  @IsNotEmpty()
  judul_project: string;

  @Field(() => String, { description: 'merupakan deskripsi singkat project' })
  @IsNotEmpty()
  isi_project: string;
}

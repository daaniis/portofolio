import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { KaryawanService } from './karyawan.service';
import { Karyawan } from './entities/karyawan.entity';
import { CreateKaryawanInput } from './dto/create-karyawan.input';
import { UpdateKaryawanInput } from './dto/update-karyawan.input';

@Resolver(() => Karyawan)
export class KaryawanResolver {
  constructor(private readonly karyawanService: KaryawanService) {}

  @Mutation(() => Karyawan)
  createKaryawan(
    @Args('createKaryawanInput') createKaryawanInput: CreateKaryawanInput,
  ) {
    return this.karyawanService.create(createKaryawanInput);
  }

  @Query(() => [Karyawan], { name: 'karyawans' })
  findAll() {
    return this.karyawanService.findAll();
  }

  @Query(() => Karyawan, { name: 'karyawan' })
  findOne(@Args('id', { type: () => String }) id_karyawan: number) {
    return this.karyawanService.findOne(id_karyawan);
  }

  @Mutation(() => Karyawan)
  updateKaryawan(
    @Args('updateKaryawanInput') updateKaryawanInput: UpdateKaryawanInput,
  ) {
    return this.karyawanService.update(
      updateKaryawanInput.id_karyawan,
      updateKaryawanInput,
    );
  }

  @Mutation(() => Karyawan)
  removeKaryawan(
    @Args('id_karyawan', { type: () => String }) id_karyawan: number,
  ) {
    return this.karyawanService.remove(id_karyawan);
  }
}

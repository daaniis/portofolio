import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { KritikSaranService } from './kritik_saran.service';
import { KritikSaran } from './entities/kritik_saran.entity';
import { CreateKritikSaranInput } from './dto/create-kritik_saran.input';
import { UpdateKritikSaranInput } from './dto/update-kritik_saran.input';
import { UseGuards } from '@nestjs/common';
import { KritikSaranGuard } from './kritik_saran.guard';

@Resolver(() => KritikSaran)
export class KritikSaranResolver {
  constructor(private readonly kritikSaranService: KritikSaranService) {}

  @Mutation(() => KritikSaran)
  createKritikSaran(
    @Args('createKritikSaranInput')
    createKritikSaranInput: CreateKritikSaranInput,
  ) {
    return this.kritikSaranService.create(createKritikSaranInput);
  }

  @Query(() => [KritikSaran], { name: 'kritikSaranx' })
  @UseGuards(KritikSaranGuard)
  findAll() {
    return this.kritikSaranService.findAll();
  }

  @Query(() => KritikSaran, { name: 'kritikSaran' })
  findOne(@Args('id', { type: () => String }) id_kritiksaran: number) {
    return this.kritikSaranService.findOne(id_kritiksaran);
  }

  @Mutation(() => KritikSaran)
  updateKritikSaran(
    @Args('updateKritikSaranInput')
    updateKritikSaranInput: UpdateKritikSaranInput,
  ) {
    return this.kritikSaranService.update(
      updateKritikSaranInput.id_kritiksaran,
      updateKritikSaranInput,
    );
  }

  @Mutation(() => KritikSaran)
  removeKritikSaran(
    @Args('id_kritiksaran', { type: () => String }) id_kritiksaran: number,
  ) {
    return this.kritikSaranService.remove(id_kritiksaran);
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DivisiService } from './divisi.service';
import { Divisi } from './entities/divisi.entity';
import { CreateDivisiInput } from './dto/create-divisi.input';
import { UpdateDivisiInput } from './dto/update-divisi.input';
import { UseGuards } from '@nestjs/common';
import { PublicGuard } from 'src/public.guard';

@Resolver(() => Divisi)
@UseGuards(PublicGuard)
export class DivisiResolver {
  constructor(private readonly divisiService: DivisiService) {}

  @Mutation(() => Divisi)
  createDivisi(
    @Args('createDivisiInput') createDivisiInput: CreateDivisiInput,
  ) {
    return this.divisiService.create(createDivisiInput);
  }

  @Query(() => [Divisi], { name: 'divisix' })
  findAll() {
    return this.divisiService.findAll();
  }

  @Query(() => Divisi, { name: 'divisi' })
  findOne(@Args('id', { type: () => String }) id_divisi: number) {
    return this.divisiService.findOne(id_divisi);
  }

  @Mutation(() => Divisi)
  updateDivisi(
    @Args('updateDivisiInput') updateDivisiInput: UpdateDivisiInput,
  ) {
    return this.divisiService.update(
      updateDivisiInput.id_divisi,
      updateDivisiInput,
    );
  }

  @Mutation(() => Divisi)
  removeDivisi(@Args('id_divisi', { type: () => String }) id_divisi: number) {
    return this.divisiService.remove(id_divisi);
  }
}

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Portofolio } from './entities/portofolio.entity';
import { PortofolioService } from './portofolio.service';
import { CreatePortofolioInput } from './dto/create-portofolio.input';
import { UpdatePortofolioInput } from './dto/update-portofolio.input';
import { UseGuards } from '@nestjs/common';
import { PublicGuard } from 'src/public.guard';

@Resolver()
@UseGuards(PublicGuard)
export class PortofolioResolver {
  constructor(private readonly portofService: PortofolioService) {}

  @Mutation(() => Portofolio)
  createPorto(
    @Args('createPortofolioInput') createPortofolioInput: CreatePortofolioInput,
  ) {
    return this.portofService.create(createPortofolioInput);
  }

  @Query(() => [Portofolio], { name: 'portofolios' })
  findAll() {
    return this.portofService.findAll();
  }

  @Query(() => Portofolio, { name: 'portofolio' })
  findOne(@Args('id', { type: () => String }) id_portofolio: number) {
    return this.portofService.findOne(id_portofolio);
  }

  @Mutation(() => Portofolio)
  updatePortofolio(
    @Args('updatePortofolioInput') updatePortofolioInput: UpdatePortofolioInput,
  ) {
    return this.portofService.update(
      updatePortofolioInput.id_portofolio,
      updatePortofolioInput,
    );
  }

  @Mutation(() => Portofolio)
  removePortofolio(
    @Args('userId', { type: () => String }) id_portofolio: number,
  ) {
    return this.portofService.remove(id_portofolio);
  }
}

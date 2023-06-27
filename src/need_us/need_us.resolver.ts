import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NeedUsService } from './need_us.service';
import { NeedUs } from './entities/need_us.entity';
import { CreateNeedUsInput } from './dto/create-need_us.input';
import { UpdateNeedUsInput } from './dto/update-need_us.input';
import { UseGuards } from '@nestjs/common';
import { PublicGuard } from 'src/public.guard';

@Resolver(() => NeedUs)
@UseGuards(PublicGuard)
export class NeedUsResolver {
  constructor(private readonly needUsService: NeedUsService) {}

  @Mutation(() => NeedUs)
  createNeedUs(
    @Args('createNeedUsInput') createNeedUsInput: CreateNeedUsInput,
  ) {
    return this.needUsService.create(createNeedUsInput);
  }

  @Query(() => [NeedUs], { name: 'needUsx' })
  findAll() {
    return this.needUsService.findAll();
  }

  @Query(() => NeedUs, { name: 'needUs' })
  findOne(@Args('id_needus', { type: () => String }) id_needus: number) {
    return this.needUsService.findOne(id_needus);
  }

  @Mutation(() => NeedUs)
  updateNeedUs(
    @Args('updateNeedUsInput') updateNeedUsInput: UpdateNeedUsInput,
  ) {
    return this.needUsService.update(
      updateNeedUsInput.id_needus,
      updateNeedUsInput,
    );
  }

  @Mutation(() => NeedUs)
  removeNeedUs(@Args('id_needus', { type: () => String }) id_needus: number) {
    return this.needUsService.remove(id_needus);
  }
}

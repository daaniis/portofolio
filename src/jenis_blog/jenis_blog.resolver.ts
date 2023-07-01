import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JenisBlogService } from './jenis_blog.service';
import { JenisBlog } from './entities/jenis_blog.entity';
import { CreateJenisBlogInput } from './dto/create-jenis_blog.input';
import { UpdateJenisBlogInput } from './dto/update-jenis_blog.input';
import { UseGuards } from '@nestjs/common';
import { PublicGuard } from 'src/public.guard';

@Resolver(() => JenisBlog)
@UseGuards(PublicGuard)
export class JenisBlogResolver {
  constructor(private readonly jenisBlogService: JenisBlogService) {}

  @Mutation(() => JenisBlog)
  createJenisBlog(
    @Args('createJenisBlogInput') createJenisBlogInput: CreateJenisBlogInput,
  ) {
    return this.jenisBlogService.create(createJenisBlogInput);
  }

  @Query(() => [JenisBlog], { name: 'queryJenisblog' })
  findAll() {
    return this.jenisBlogService.findAll();
  }

  @Query(() => JenisBlog, { name: 'jenisBlog' })
  findOne(@Args('id', { type: () => String }) id_jenisblog: number) {
    return this.jenisBlogService.findOne(id_jenisblog);
  }

  @Mutation(() => JenisBlog)
  updateJenisBlog(
    @Args('updateJenisBlogInput') updateJenisBlogInput: UpdateJenisBlogInput,
  ) {
    return this.jenisBlogService.update(
      updateJenisBlogInput.id_jenisblog,
      updateJenisBlogInput,
    );
  }

  @Mutation(() => JenisBlog)
  removeJenisBlog(
    @Args('id_jenisblog', { type: () => String }) id_jenisblog: number,
  ) {
    return this.jenisBlogService.remove(id_jenisblog);
  }
}

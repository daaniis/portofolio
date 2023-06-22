import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JenisProjectService } from './jenis_project.service';
import { JenisProject } from './entities/jenis_project.entity';
import { CreateJenisProjectInput } from './dto/create-jenis_project.input';
import { UpdateJenisProjectInput } from './dto/update-jenis_project.input';

@Resolver(() => JenisProject)
export class JenisProjectResolver {
  constructor(private readonly jenisProjectService: JenisProjectService) {}

  @Mutation(() => JenisProject)
  createJenisProject(
    @Args('createJenisProjectInput')
    createJenisProjectInput: CreateJenisProjectInput,
  ) {
    return this.jenisProjectService.create(createJenisProjectInput);
  }

  @Query(() => [JenisProject], { name: 'jenisProjects' })
  findAll() {
    return this.jenisProjectService.findAll();
  }

  @Query(() => JenisProject, { name: 'jenisProject' })
  findOne(@Args('id', { type: () => String }) id_jenisproject: number) {
    return this.jenisProjectService.findOne(id_jenisproject);
  }

  @Mutation(() => JenisProject)
  updateJenisProject(
    @Args('updateJenisProjectInput')
    updateJenisProjectInput: UpdateJenisProjectInput,
  ) {
    return this.jenisProjectService.update(
      updateJenisProjectInput.id_jenisproject,
      updateJenisProjectInput,
    );
  }

  @Mutation(() => JenisProject)
  removeJenisProject(
    @Args('id_jenisproject', { type: () => String }) id_jenisproject: number,
  ) {
    return this.jenisProjectService.remove(id_jenisproject);
  }
}

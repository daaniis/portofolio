import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client } from './entities/client.entity';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { UseGuards } from '@nestjs/common';
import { PublicGuard } from 'src/public.guard';

@Resolver(() => Client)
@UseGuards(PublicGuard)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Mutation(() => Client)
  createClient(
    @Args('createClientInput') createClientInput: CreateClientInput,
  ) {
    return this.clientService.create(createClientInput);
  }

  @Query(() => [Client], { name: 'clients' })
  findAll() {
    return this.clientService.findAll();
  }

  @Query(() => Client, { name: 'client' })
  findOne(@Args('id', { type: () => String }) id_client: number) {
    return this.clientService.findOne(id_client);
  }

  @Mutation(() => Client)
  updateClient(
    @Args('updateClientInput') updateClientInput: UpdateClientInput,
  ) {
    return this.clientService.update(
      updateClientInput.id_client,
      updateClientInput,
    );
  }

  @Mutation(() => Client)
  removeClient(@Args('id_client', { type: () => String }) id_client: number) {
    return this.clientService.remove(id_client);
  }
}

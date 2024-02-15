import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
import { UpdateAccountInput } from './dto/update-account.input';
import { CreateAccountInput } from './dto/create-account.input';

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Query(() => [Account])
  async getAccounts(): Promise<Account[]> {
    return this.accountService.findAll();
  }

  @Query(() => Account)
  async getAccount(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Account> {
    return this.accountService.findOne(id);
  }

  @Mutation(() => Account)
  async createAccount(
    @Args('input') input: CreateAccountInput,
  ): Promise<Account> {
    return this.accountService.create(input);
  }

  @Mutation(() => Account)
  async updateAccount(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateAccountInput,
  ): Promise<Account> {
    return this.accountService.update(id, input);
  }

  @Mutation(() => Account)
  async deleteAccount(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Account> {
    return this.accountService.delete(id);
  }
}

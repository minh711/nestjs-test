import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AccountResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}

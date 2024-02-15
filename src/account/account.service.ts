import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
  ) {}

  async findAll(): Promise<Account[]> {
    return await this.accountRepository.find();
  }

  async findOne(id: number): Promise<Account> {
    return await this.accountRepository.findOneOrFail({ where: { id } });
  }

  async create(createAccountInput: CreateAccountInput): Promise<Account> {
    const account = this.accountRepository.create(createAccountInput);

    const { username, email } = createAccountInput;

    // Check if username or email already exists
    const existingAccount = await this.accountRepository.findOne({
      where: [{ username }, { email }],
    });
    if (existingAccount) {
      throw new ConflictException('Username or email already exists');
    }

    return await this.accountRepository.save(account);
  }

  async update(
    id: number,
    updateAccountInput: UpdateAccountInput,
  ): Promise<Account> {
    await this.accountRepository.update(id, updateAccountInput);
    return await this.accountRepository.findOneOrFail({ where: { id } });
  }

  async delete(id: number): Promise<Account> {
    const accountToDelete = await this.accountRepository.findOneOrFail({
      where: { id },
    });
    await this.accountRepository.delete(id);
    return accountToDelete;
  }
}

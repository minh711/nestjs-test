import { MigrationInterface, QueryRunner } from 'typeorm';
import { accounts } from '../seeder';

export class AddDataForAccount1707906336571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('OK?');
    const builder = queryRunner.manager.createQueryBuilder();
    await builder.insert().into('account').values(accounts).execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const builder = queryRunner.manager.createQueryBuilder();
    await builder.delete().from('account').execute();
  }
}

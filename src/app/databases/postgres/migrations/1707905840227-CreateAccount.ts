import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAccount1707905840227 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExist = await queryRunner.hasTable('account');
    if (!tableExist) {
      await queryRunner.createTable(
        new Table({
          name: 'account',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'username',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'email',
              type: 'varchar',
              isNullable: false,
            },
            {
              name: 'firstName',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'lastName',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'gender',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'age',
              type: 'int',
              isNullable: true,
            },
            {
              name: 'createdAt',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
            },
            {
              name: 'updatedAt',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
              onUpdate: 'CURRENT_TIMESTAMP',
            },
          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('account');
  }
}

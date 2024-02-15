import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const postgresqlDataSource: DataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  migrations: ['src/app/databases/postgres/migrations/*.ts'],
  migrationsTableName: 'migrations',
});

export default postgresqlDataSource;

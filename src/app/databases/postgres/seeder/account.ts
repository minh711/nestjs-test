import { IAccount } from '../type';

export const accounts: IAccount[] = [
  {
    id: 1,
    username: 'user1',
    email: 'user1@example.com',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'male',
    age: 30,
    createdAt: new Date('2024-02-14T17:30:00'),
    updatedAt: new Date('2024-02-14T17:30:00'),
  },
  {
    id: 2,
    username: 'user2',
    email: 'user2@example.com',
    firstName: 'Jane',
    lastName: 'Smith',
    gender: 'female',
    age: 25,
    createdAt: new Date('2024-02-14T17:30:00'),
    updatedAt: new Date('2024-02-14T17:30:00'),
  },
];

import { fetchUsers } from './users.api';

let usersPromise;

export const getUsersResource = () => {
  if (!usersPromise) {
    usersPromise = fetchUsers();
  }
  return usersPromise;
};
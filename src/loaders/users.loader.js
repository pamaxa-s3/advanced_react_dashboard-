import { getUsers } from '@helpers';

export const usersLoader = async () => {
	return getUsers();
};
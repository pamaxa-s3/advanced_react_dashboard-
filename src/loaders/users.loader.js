import { defer } from 'react-router-dom';
import { getUsers, getUsersSlow } from '@helpers';

export const usersLoader = async () => {
	return getUsers();
};

export const usersLoaderSlow = () => {
	return defer({
		users: getUsersSlow(),
	});
};
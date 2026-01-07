import { useLoaderData } from 'react-router-dom';
import {UserItem} from '@components';

const Users = () => {
	const users = useLoaderData();

	return (
		<div>
			<h2>Users</h2>

			<ul>
				{users.map(user => (
					<UserItem key={user.id} user={user} />
				))}
			</ul>
		</div>
	);
};

export default Users;
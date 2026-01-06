import { useLoaderData } from 'react-router-dom';

const Users = () => {
	const users = useLoaderData();

	return (
		<div>
			<h2>Users</h2>
			<ul>
				{users.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Users;
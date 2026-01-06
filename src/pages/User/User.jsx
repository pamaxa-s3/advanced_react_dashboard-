import { useLoaderData } from 'react-router-dom';

const User = () => {
	const users = useLoaderData();

	return (
		<div>
			<h2>User</h2>
			<ul>
				{users.map(user => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default User;
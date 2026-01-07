import { useLoaderData, useNavigation } from 'react-router-dom';
import { UserItem } from '@components';
import '@styles/spinner.css';

const Users = () => {
	const users = useLoaderData();
	const navigation = useNavigation();

	const isLoading = navigation.state === 'loading';
	console.log(isLoading);

	if (isLoading) {
		// return <span className="loader"></span>
		console.log(isLoading);
	}

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

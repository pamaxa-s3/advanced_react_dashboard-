import { useLoaderData } from 'react-router-dom';

const UserPage = () => {
	const user = useLoaderData();

	return (
		<div>
			<h2>{user.name}</h2>
			<p>Email: {user.email}</p>
		</div>
	);
};

export default UserPage;
import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

const UsersSlow = () => {
	const { users } = useLoaderData();

	return (
		<div>
			<h2>Users</h2>

			<Suspense fallback={<p>Loading users...</p>}>
				<Await resolve={users}>
					{resolvedUsers => (
						<ul>
							{resolvedUsers.map(user => (
								<li key={user.id}>{user.name}</li>
							))}
						</ul>
					)}
				</Await>
			</Suspense>
		</div>
	);
};

export default UsersSlow;
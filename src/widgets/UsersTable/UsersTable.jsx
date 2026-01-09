import { useEffect, useMemo, useState, useDeferredValue } from 'react';
import { fetchUsers } from '@api/users';
import cls from './usersTable.module.css';

const UsersTable = () => {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState('All');
	const [sort, setSort] = useState('name');

	const deferredSearch = useDeferredValue(search);
	const deferredStatus = useDeferredValue(status);
	const deferredSort = useDeferredValue(sort);

	useEffect(() => {
		fetchUsers().then(setUsers);
	}, []);

	const filteredUsers = useMemo(() => {
		let list = [...users];

		if (deferredSearch) {
			list = list.filter(user =>
				user.name
					.toLowerCase()
					.includes(deferredSearch.toLowerCase())
			);
		}

		if (deferredStatus !== 'All') {
			list = list.filter(user =>
				deferredStatus === 'Active'
					? user.active
					: !user.active
			);
		}

		switch (deferredSort) {
			case 'date':
				list.sort((a, b) => b.createdAt - a.createdAt);
				break;
			case 'active':
				list.sort((a, b) => b.active - a.active);
				break;
			default:
				list.sort((a, b) => a.name.localeCompare(b.name));
		}

		return list;
	}, [users, deferredSearch, deferredStatus, deferredSort]);

	return (
		<section>
			<h3>Users</h3>

			<div className={cls.controls}>
				<input
					placeholder="Search by name..."
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>

				<select
					value={status}
					onChange={e => setStatus(e.target.value)}
				>
					<option>All</option>
					<option>Active</option>
					<option>Inactive</option>
				</select>

				<select
					value={sort}
					onChange={e => setSort(e.target.value)}
				>
					<option value="name">Name</option>
					<option value="date">Registration Date</option>
					<option value="active">Activity</option>
				</select>
			</div>

			<table className={cls.table}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Status</th>
						<th>Registered</th>
					</tr>
				</thead>

				<tbody>
					{filteredUsers.map(user => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>
								{user.active ? 'Active' : 'Inactive'}
							</td>
							<td>
								{new Date(
									user.createdAt
								).toLocaleDateString()}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default UsersTable;

import { useEffect, useState, useOptimistic } from 'react';
import { fetchOrders, updateOrderStatus } from '@api/orders';
import cls from './ordersTable.module.css';

const OrdersTable = () => {
	const [orders, setOrders] = useState([]);
	const [filter, setFilter] = useState('All');

	const [optimisticOrders, updateOptimistic] = useOptimistic(
		orders,
		(state, { id, status }) =>
			state.map(order =>
				order.id === id ? { ...order, status } : order
			)
	);

	useEffect(() => {
		fetchOrders().then(setOrders);
	}, []);

	const handleStatusChange = async (id, status) => {
		updateOptimistic({ id, status });

		try {
			await updateOrderStatus(id, status);
		} catch (error) {
			alert(error.message);
			// rollback автоматично, бо базовий state не мінявся
		}
	};

	const filteredOrders =
		filter === 'All'
			? optimisticOrders
			: optimisticOrders.filter(order => order.status === filter);

	return (
		<section>
			<h3>Recent Orders</h3>

			<select
				value={filter}
				onChange={e => setFilter(e.target.value)}
			>
				<option>All</option>
				<option>Pending</option>
				<option>Completed</option>
				<option>Cancelled</option>
			</select>

			<table className={cls.table}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Customer</th>
						<th>Product</th>
						<th>Amount</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{filteredOrders.map(order => (
						<tr key={order.id}>
							<td>{order.id}</td>
							<td>{order.customer}</td>
							<td>{order.product}</td>
							<td>{order.amount}</td>
							<td>{order.status}</td>
							<td>
								<select
									value={order.status}
									onChange={e =>
										handleStatusChange(
											order.id,
											e.target.value
										)
									}
								>
									<option>Pending</option>
									<option>Completed</option>
									<option>Cancelled</option>
								</select>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default OrdersTable;

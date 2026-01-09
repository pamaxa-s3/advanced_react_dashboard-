let orders = Array.from({ length: 12 }, (_, i) => ({
	id: i + 1,
	customer: `Customer ${i + 1}`,
	product: `Product ${i + 1}`,
	amount: `$${(Math.random() * 500 + 50).toFixed(2)}`,
	status: ['Pending', 'Completed', 'Cancelled'][i % 3]
}));

export const fetchOrders = async () => {
	await new Promise(res => setTimeout(res, 600));
	return orders;
};

export const updateOrderStatus = async (id, status) => {
	await new Promise(res => setTimeout(res, 800));

	// симуляція помилки
	if (Math.random() < 0.25) {
		throw new Error('Failed to update order');
	}

	orders = orders.map(order =>
		order.id === id ? { ...order, status } : order
	);

	return true;
};

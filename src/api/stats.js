export const fetchStats = async () => {
	await new Promise(res => setTimeout(res, 800));

	return [
		{
			id: 'revenue',
			title: 'Total Revenue',
			value: '$124,500',
			change: 15
		},
		{
			id: 'orders',
			title: 'Orders',
			value: '1,248',
			change: -5
		},
		{
			id: 'users',
			title: 'New Users',
			value: '320',
			change: 8
		},
		{
			id: 'products',
			title: 'Products in Stock',
			value: '1,540',
			change: 2
		}
	];
};

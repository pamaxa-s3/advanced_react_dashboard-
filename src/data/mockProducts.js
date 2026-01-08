export const products = Array.from({ length: 500 }, (_, i) => ({
	id: i + 1,
	name: `Product ${i + 1}`,
	category: i % 2 === 0 ? 'Sales' : 'Users',
}));

const items = [
	'Apple MacBook Pro',
	'Samsung Galaxy S24',
	'Sony Headphones',
	'Nike Air Max',
	'Adidas Ultraboost',
	'Dell XPS 15',
	'HP Spectre x360',
	'Logitech MX Master',
	'Canon EOS R5',
	'PlayStation 5'
];

export const searchItems = async (query) => {
	await new Promise(res => setTimeout(res, 600));

	if (!query) return [];

	return items.filter(item =>
		item.toLowerCase().includes(query.toLowerCase())
	);
};

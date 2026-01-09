export const fetchSalesData = async (period) => {
	await new Promise(res => setTimeout(res, 1000));

	const base = period === 'Year' ? 12 : period === 'Month' ? 30 : 7;

	return Array.from({ length: base }, (_, i) => ({
		label: `${i + 1}`,
		value: Math.floor(Math.random() * 1000 + 200)
	}));
};

export const addSale = async (formData) => {
	await new Promise(res => setTimeout(res, 1200));

	const quantity = Number(formData.get('quantity'));
	const price = Number(formData.get('price'));

	if (quantity <= 0 || price <= 0) {
		throw new Error('Invalid quantity or price');
	}

	if (Math.random() < 0.2) {
		throw new Error('Server error. Try again.');
	}

	return {
		id: Date.now(),
		customer: formData.get('customer'),
		product: formData.get('product'),
		quantity,
		price
	};
};

export const fetchSalesChart = async (period) => {
  await new Promise((r) => setTimeout(r, 1000));

  return {
    period,
    data: Array.from({ length: 7 }, (_, i) => ({
      day: `Day ${i + 1}`,
      value: Math.floor(Math.random() * 1000)
    }))
  };
};

export const createSale = async (formData) => {
  await new Promise((r) => setTimeout(r, 1000));

  const errors = {};

  if (!formData.client) errors.client = 'Client is required';
  if (!formData.product) errors.product = 'Product is required';
  if (formData.quantity <= 0)
    errors.quantity = 'Quantity must be > 0';
  if (formData.price <= 0)
    errors.price = 'Price must be > 0';

  if (Object.keys(errors).length > 0) {
    throw { validationErrors: errors };
  }

  return {
    id: Date.now(),
    ...formData
  };
};
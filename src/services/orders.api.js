export const updateOrderStatus = async (orderId, status) => {
  await new Promise((r) => setTimeout(r, 800));

  // емуляція помилки
  if (Math.random() < 0.2) {
    throw new Error('Failed to update order');
  }

  return { id: orderId, status };
};
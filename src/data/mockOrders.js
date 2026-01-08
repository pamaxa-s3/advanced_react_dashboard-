export const ordersData = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    customer: `Customer ${i + 1}`,
    product: `Product ${i + 1}`,
    amount: Math.floor(Math.random() * 1000) + 100,
    status: "pending"
}));

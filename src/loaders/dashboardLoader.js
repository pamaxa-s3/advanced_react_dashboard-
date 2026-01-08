export const dashboardLoader = async () => {
  await new Promise(res => setTimeout(res, 1200));

  return {
    stats: {
      users: 1240,
      revenue: 18230,
      conversion: 4.2
    },
    table: [
      { id: 1, name: 'Product A', sales: 320 },
      { id: 2, name: 'Product B', sales: 210 },
      { id: 3, name: 'Product C', sales: 510 }
    ]
  };
};
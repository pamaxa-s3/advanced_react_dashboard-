import { fetchSalesChart } from './sales.api';

const cache = new Map();

export const getSalesChartResource = (period) => {
  if (!cache.has(period)) {
    cache.set(period, fetchSalesChart(period));
  }

  return cache.get(period);
};
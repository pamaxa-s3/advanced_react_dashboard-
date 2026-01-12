import { defer } from "react-router-dom";
import { fetchStats, fetchSalesChartData, fetchUsers, fetchOrders } from "@services/api";

export const dashboardLoader = async () => {
  return defer({
    stats: fetchStats(),
    chart: fetchSalesChartData(),
    users: fetchUsers(),
    orders: fetchOrders(),
  })
}
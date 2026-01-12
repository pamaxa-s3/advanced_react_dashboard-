import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";

import StatsCards from "@components/StatsCards";
import LiveSearch from "@components/LiveSearch";
import OrdersTable from "@components/OrdersTable";
import SalesChart from "@components/SalesChart";

import WidgetErrorBoundary from "@components/ErrorBoundary/WidgetErrorBoundary";

import styles from "./Dashboard.module.css";

const DashboardPage = () => {
    const data = useLoaderData();

    return (
        <div className={styles.grid}>
            <WidgetErrorBoundary>
                <Suspense fallback={<div>Loading stats…</div>}>
                    <Await resolve={data.stats}>
                        {stats => <StatsCards data={stats} />}
                    </Await>
                </Suspense>
            </WidgetErrorBoundary>

            <WidgetErrorBoundary>
                <LiveSearch />
            </WidgetErrorBoundary>

            <WidgetErrorBoundary>
                <Suspense fallback={<div>Loading orders…</div>}>
                    <Await resolve={data.orders}>
                        {orders => <OrdersTable initialData={orders} />}
                    </Await>
                </Suspense>
            </WidgetErrorBoundary>

            <WidgetErrorBoundary>
                <Suspense fallback={<div>Loading chart…</div>}>
                    <Await resolve={data.chart}>
                        {chartData => <SalesChart data={chartData} />}
                    </Await>
                </Suspense>
            </WidgetErrorBoundary>
        </div>
    );
};

export default DashboardPage;

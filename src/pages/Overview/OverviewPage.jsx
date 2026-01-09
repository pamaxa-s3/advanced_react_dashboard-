import StatsCards from '@widgets/StatsCards';
import LiveSearch from '@widgets/LiveSearch';
import OrdersTable from '@widgets/OrdersTable';
import SalesChart from '@widgets/SalesChart';

const OverviewPage = () => {
	return (
		<>
			<StatsCards />
			<LiveSearch />
			<OrdersTable />
			<SalesChart />
		</>
	);
};

export default OverviewPage;

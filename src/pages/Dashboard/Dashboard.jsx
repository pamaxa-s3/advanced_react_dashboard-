import {FiltersPanel,LiveSearch, OrdersTable} from '@components';

const Dashboard = () => {
	return (
		<section>
			<h1>Analytics Dashboard</h1>

			{/* Filters */}
			<FiltersPanel />

			{/* Search */}
			<LiveSearch />
			
			<OrdersTable />

			{/* Widgets */}
			<div>
				<div>SalesWidget</div>
				<div>UsersWidget</div>
				<div>ActivityWidget</div>
			</div>
		</section>
	);
};

export default Dashboard;
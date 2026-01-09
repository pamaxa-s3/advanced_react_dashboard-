import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '@components';
import cls from './DashboardLayout.module.css';

const DashboardLayout = () => {
	return (
		<div className={cls.layout}>
			<Header />

			<div className={cls.body}>
				<Sidebar />
				<main className={cls.content}>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;

import { useEffect, useState, useTransition } from 'react';
import { fetchSalesData } from '@api/sales';
import cls from './salesChart.module.css';

const periods = ['Week', 'Month', 'Year'];

const SalesChart = () => {
	const [period, setPeriod] = useState('Week');
	const [data, setData] = useState([]);
	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		startTransition(() => {
			fetchSalesData(period).then(setData);
		});
	}, [period]);

	return (
		<section
			className={cls.wrapper}
			style={{ opacity: isPending ? 0.5 : 1 }}
		>
			<header className={cls.header}>
				<h3>Sales Chart</h3>

				<div className={cls.controls}>
					{periods.map(p => (
						<button
							key={p}
							onClick={() => setPeriod(p)}
							className={p === period ? cls.active : ''}
						>
							{p}
						</button>
					))}
				</div>
			</header>

			<div className={cls.chart}>
				{data.map(item => (
					<div key={item.label} className={cls.bar}>
						<div
							className={cls.barFill}
							style={{ height: `${item.value / 10}%` }}
						/>
						<span>{item.label}</span>
					</div>
				))}
			</div>

			{isPending && <p className={cls.loading}>Updating data…</p>}
		</section>
	);
};

export default SalesChart;

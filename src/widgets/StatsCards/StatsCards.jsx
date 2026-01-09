import { useEffect, useState } from 'react';
import StatsCard from './StatsCard';
import { fetchStats } from '@api/stats';
import cls from './statsCards.module.css';

const StatsCards = () => {
	const [stats, setStats] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchStats().then(data => {
			setStats(data);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <p>Loading statistics...</p>;
	}

	return (
		<section className={cls.grid}>
			{stats.map(item => (
				<StatsCard key={item.id} {...item} />
			))}
		</section>
	);
};

export default StatsCards;

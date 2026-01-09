import cls from './statsCards.module.css';

const StatsCard = ({ title, value, change }) => {
	const isPositive = change >= 0;

	return (
		<div className={cls.card}>
			<p className={cls.title}>{title}</p>
			<h3 className={cls.value}>{value}</h3>

			<span
				className={`${cls.change} ${isPositive ? cls.positive : cls.negative}`}
			>
				{isPositive ? '▲' : '▼'} {Math.abs(change)}%
			</span>
		</div>
	);
};

export default StatsCard;

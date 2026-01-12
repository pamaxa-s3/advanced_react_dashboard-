import styles from './StatsCards.module.css';

const StatsCards = ({ data }) => {
  return (
    <section className={styles.cards}>
      {data.map((item) => (
        <div key={item.id} className={styles.card}>
          <h3>{item.label}</h3>
          <p className={styles.value}>{item.value}</p>
          <span
            className={
              item.delta > 0 ? styles.positive : styles.negative
            }
          >
            {item.delta > 0 ? '+' : ''}
            {item.delta}%
          </span>
        </div>
      ))}
    </section>
  );
};

export default StatsCards;
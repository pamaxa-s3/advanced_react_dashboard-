import { use, useState, useTransition } from "react";

import { getSalesChartResource } from "@services/sales.resource";

import styles from "./SalesChart.module.css";

const SalesChartContent = ({ period }) => {
    const chart = use(getSalesChartResource(period));

    return (
        <ul className={styles.chart}>
            {chart.data.map(item => (
                <li key={item.day}>
                    {item.day}: <strong>{item.value}</strong>
                </li>
            ))}
        </ul>
    );
};

const SalesChart = ({ data }) => {
    const [period, setPeriod] = useState("week");
    const [isPending, startTransition] = useTransition();

    const handleChange = value => {
        startTransition(() => {
            setPeriod(value);
        });
    };

    return (
        <section
            className={styles.wrapper}
            style={{ opacity: isPending ? 0.5 : 1 }}
        >
            <h3>Sales Chart</h3>

            <div className={styles.controls}>
                <button onClick={() => handleChange("week")}>Week</button>
                <button onClick={() => handleChange("month")}>Month</button>
                <button onClick={() => handleChange("year")}>Year</button>
            </div>

            <SalesChartContent period={period} />
        </section>
    );
};

export default SalesChart;

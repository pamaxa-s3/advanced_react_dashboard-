import { useState, useTransition } from "react";

export const DashboardFilters = ({ data }) => {
    const [filter, setFilter] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    const [isPending, startTransition] = useTransition();

    const handleFilterChange = value => {
        setFilter(value); // критично — оновлюємо одразу

        startTransition(() => {
            const result = expensiveFilter(data, value);
            setFilteredData(result); // некритично
        });
    };

    return (
        <>
            <input
                value={filter}
                onChange={e => handleFilterChange(e.target.value)}
                placeholder="Фільтр..."
            />

            {isPending && <span>Оновлення даних…</span>}

            <Chart data={filteredData} />
        </>
    );
};

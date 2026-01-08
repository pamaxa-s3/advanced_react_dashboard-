import { useState, useDeferredValue, useMemo } from "react";

export const DashboardSearch = ({ data }) => {
    const [search, setSearch] = useState("");
    const deferredSearch = useDeferredValue(search);

    const filteredData = useMemo(() => {
        return expensiveFilter(data, deferredSearch);
    }, [data, deferredSearch]);

    return (
        <>
            <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Пошук..."
            />

            {search !== deferredSearch && <p>Фільтрація…</p>}

            <Table data={filteredData} />
        </>
    );
};

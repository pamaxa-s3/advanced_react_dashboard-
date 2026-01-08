import { use, useState } from 'react';
import { dashboardPromise } from './data';
import { AddWidgetForm, UsersTable, Filters } from '@components';

const Dashboard = () => {
    const data = use(dashboardPromise);

    const [search, setSearch] = useState('');

    return (
        <>
            <h1>Аналітичний Dashboard</h1>

            {/* <StatsWidgets stats={data.stats} /> */}

            <Filters
                search={search}
                onSearchChange={setSearch}
            />

            <UsersTable
                data={data.table}
                search={search}
            />

            <AddWidgetForm />
        </>
    );
};

export default Dashboard;

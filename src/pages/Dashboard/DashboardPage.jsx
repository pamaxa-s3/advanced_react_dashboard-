import { Suspense } from 'react';
import Dashboard from './Dashboard';
import { ErrorBoundary } from '@components';

const DashboardPage = () => (
    <ErrorBoundary>
        <Suspense fallback={<p>Завантаження дашборду...</p>}>
            <Dashboard />
        </Suspense>
    </ErrorBoundary>
);

export default DashboardPage;

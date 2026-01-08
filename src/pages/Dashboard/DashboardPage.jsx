import { Suspense } from "react";
import Dashboard from "./Dashboard";

const DashboardPage = () => (
    <Suspense fallback={<p>Завантаження дашборду...</p>}>
        <Dashboard />
    </Suspense>
);

export default DashboardPage;

import { Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { ThemeProvider } from '@contexts';
import { Header, Footer } from "@components";


const MainLayout = () => {
    return (
        <ThemeProvider>
            <Suspense fallback={<div>Loading header...</div>}>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />

            </Suspense>
        </ThemeProvider>
    );
};

export default MainLayout;

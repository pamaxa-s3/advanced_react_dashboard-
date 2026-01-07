import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components";

const MainLayout = () => {
    return (
        <> 
        <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;

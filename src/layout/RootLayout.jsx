import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

function RootLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default RootLayout;

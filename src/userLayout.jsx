import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Footer from "./pages/Home/Footer";
import ScrollTop from "./hooks/use-scroll-to-top";
import FloatingWhatsApp from "./components/Common/FloatingWhatsApp";

const UserLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <ScrollTop />

            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <FloatingWhatsApp />

            <Footer />
        </div>
    );
};

export default UserLayout;

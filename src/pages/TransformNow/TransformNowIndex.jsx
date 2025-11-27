import React from "react";
import TransformNowBanner from "./TransformNowBanner";
import TransformNowSection from "./TransformNowSection";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../Home/Footer";

const TransformNowIndex = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <TransformNowBanner />
            <TransformNowSection />
            {/* <Footer /> */}
        </div>
    );
};

export default TransformNowIndex;

import React from "react";
import TransformNowBanner from "./TransformNowBanner";
import TransformNowSection from "./TransformNowSection";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../Home/Footer";
import TransformNowFAQs from "./TransformNowFAQs";

const TransformNowIndex = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <TransformNowBanner />
            <TransformNowSection />
            <TransformNowFAQs />
            {/* <Footer /> */}
        </div>
    );
};

export default TransformNowIndex;

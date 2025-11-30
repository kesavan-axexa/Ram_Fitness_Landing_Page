import React from "react";
import TransformNowBanner from "./TransformNowBanner";
import TransformNowSection from "./TransformNowSection";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../Home/Footer";
import TransformNowFAQs from "./TransformNowFAQs";
import TransformNowAcheivementSection from "./TransformNowAcheivementSection";

const TransformNowIndex = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <TransformNowBanner />
            <TransformNowSection />
            <TransformNowAcheivementSection />
            <TransformNowFAQs />
            {/* <Footer /> */}
        </div>
    );
};

export default TransformNowIndex;

import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "../../components/Shared/Navbar";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ContactUsPage from "./ContactUsPage";
import Footer from "./Footer";

const Page = () => {
    return (
        <div className="">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ContactUsPage />
            <Footer />
        </div>
    );
};

export default Page;

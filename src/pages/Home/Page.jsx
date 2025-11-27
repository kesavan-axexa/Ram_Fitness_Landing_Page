import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "../../components/Shared/Navbar";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ContactUsPage from "./ContactUsPage";
import Footer from "./Footer";
import { AchievementsSection } from "./AchievementsSection";
import GallerySection from "./GallerySection";
import CoachingBanner from "./CoachingBanner";
import TestimonialCarousel from "./TestimonialCarousel";

const Page = () => {
    return (
        <div className="">
            {/* <Navbar /> */}
            <HeroSection />
            <AboutSection />
            <AchievementsSection />
            <GallerySection />
            <CoachingBanner />
            <TestimonialCarousel />
            <ContactUsPage />
            {/* <Footer /> */}
        </div>
    );
};

export default Page;

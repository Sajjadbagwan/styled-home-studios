"use client";
import React, { useEffect } from "react";
import styles from "./landingPage.module.scss";
import UspsBlock from "@/components/Design/LandingPage/uspsBlock";
import HowDoesItWork from "@/components/Design/HowDoesItWork/howDoesItWork";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import HostTestimonials from "@/components/Design/AboutUs/hostTestimonial";
import FaqTopArticle from "@/components/Design/Help/faqTopArticle";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import WhyApplySection from "@/components/Design/LandingPage/whyApply";
import LandingFaq from "@/components/Design/LandingPage/landingFaq";

export default function LandingPage() {
  
  return (
    <>
    <div className={styles.landingPage}>
        <TitleWithTextBanner />
        <Breadcrumb />
        <WhyApplySection />
        <UspsBlock />
        <HowDoesItWork />
        <AboutRightImg />
        <HostTestimonials />
        <LandingFaq />
        <FaqTopArticle />     
    </div>      
    </>
  );
}

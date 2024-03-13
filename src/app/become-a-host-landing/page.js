"use client";
import React, { useEffect } from "react";
import styles from "./BecomeAHostLanding.module.scss";
import UspsBlock from "@/components/Design/LandingPage/uspsBlock";
import HowDoesItWork from "@/components/Design/HowDoesItWork/howDoesItWork";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import HostTestimonials from "@/components/Design/AboutUs/hostTestimonial";
import FaqTopArticle from "@/components/Design/Help/faqTopArticle";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import WhyApplySection from "@/components/Design/LandingPage/whyApply";
import LandingFaq from "@/components/Design/LandingPage/landingFaq";

function Layout({ children }) {
  return (
    <>
      <div className={styles.BecomeAHostLanding}>
        <TitleWithTextBanner />
        <Breadcrumb />
        <WhyApplySection />
        <UspsBlock />
        <HowDoesItWork />
        <div className="flipRight">
          <AboutRightImg />
        </div>
        <HostTestimonials />
        <AboutRightImg />
        <LandingFaq />
        <FaqTopArticle />
      </div>
    </>
  );
}

export default Layout;

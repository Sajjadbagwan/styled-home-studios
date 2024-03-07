"use client";
import React from "react";
import styles from "./directorySalesLandingPage.module.scss";
import UspsBlock from "@/components/Design/LandingPage/uspsBlock";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import FaqTopArticle from "@/components/Design/Help/faqTopArticle";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import WhyApplySection from "@/components/Design/LandingPage/whyApply";
import JoinOurDirectory from "@/components/Design/DirectoryHome/joinOurDirectory";
import GetStarted from "@/components/Design/GetStarted/getStarted";
import AboutLeftImg from "@/components/Design/AboutLeftImg/aboutLeftImg";

export default function DirectorySalesLandingPage() {
  
  return (
    <>
    <div className={styles.directorySalesLandingPage}>
        <TitleWithTextBanner />
        <Breadcrumb />
        <WhyApplySection />
        <JoinOurDirectory />
        <UspsBlock />
        <GetStarted />
        <AboutLeftImg />
        <FaqTopArticle />     
    </div>      
    </>
  );
}

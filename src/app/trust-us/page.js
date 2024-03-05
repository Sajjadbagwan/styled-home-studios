"use client";
import React, { useEffect } from "react";
import styles from "./trustUsPage.module.scss";
import HowDoesItWork from "@/components/Design/HowDoesItWork/howDoesItWork";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import HostTestimonials from "@/components/Design/AboutUs/hostTestimonial";
import FaqTopArticle from "@/components/Design/Help/faqTopArticle";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import LandingFaq from "@/components/Design/LandingPage/landingFaq";
import LovedBy from "@/components/Design/LovedBy/lovedBy";

export default function TrustUs() {
  
  return (
    <>
    <div className={styles.trustUsPage}>
        <TitleWithTextBanner />
        <Breadcrumb />
        <LovedBy />
        <HostTestimonials />
        <AboutRightImg />
        <LandingFaq />
    </div>      
    </>
  );
}

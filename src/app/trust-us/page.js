"use client";
import React, { useEffect } from "react";
import styles from "./trustUsPage.module.scss";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import HostTestimonials from "@/components/Design/AboutUs/hostTestimonial";
import PartOfShootSection from "@/components/Design/PartofShoots/partOfShoots";
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
        <PartOfShootSection />
        <HostTestimonials />
        <AboutRightImg />
        <LandingFaq />
    </div>      
    </>
  );
}

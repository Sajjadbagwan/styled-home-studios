import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./aboutUs.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import HowDoesItWork from "@/components/Design/HowDoesItWork/howDoesItWork";
import OurMissionSection from "@/components/Design/AboutUs/ourMission";
import OurTopPick from "@/components/Design/OurTopPick/ourTopPick";
import AboutLeftImg from "@/components/Design/AboutLeftImg/aboutLeftImg";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import HostTestimonials from "@/components/Design/AboutUs/hostTestimonial";

export default function AboutUs() {
  return (
    <div className={styles.aboutUsPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <OurTopPick />
      <OurMissionSection />
      <HowDoesItWork />
      <AboutRightImg />
      <HostTestimonials />
      <AboutLeftImg />
    </div>
  );
}


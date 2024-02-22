import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./becomeHostThankYou.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import BecomeAhostThankYouMessage from "@/components/Design/BecomeAhostThankYouMessage/becomeAhostThankYouMessage";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import AboutLeftImg from "@/components/Design/AboutLeftImg/aboutLeftImg";
import LatestNews from "@/components/Design/LatestNews/latestNews";
import SignUpForm from "@/components/Design/SignUpForm/signUpForm";

export default function BecomeAhostThankyou() {
  return (
    <div className={styles.becomeAhostThankyouPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <BecomeAhostThankYouMessage />
      <AboutRightImg />
      <AboutLeftImg />
      <LatestNews />
      <SignUpForm />
    </div>
  );
}


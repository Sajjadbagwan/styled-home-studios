import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./joinDirectoryConfirmation.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import BecomeAhostThankYouMessage from "@/components/Design/BecomeAhostThankYouMessage/becomeAhostThankYouMessage";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import FaqTopArticle from "@/components/Design/Help/faqTopArticle";

export default function JoinDirectoryConfirmationPage() {
  return (
    <div className={styles.joinDirectoryConfirmationPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <BecomeAhostThankYouMessage />
      <AboutRightImg />
      <FaqTopArticle />
    </div>
  );
}


import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./help.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import PropertyFilterTab from "@/components/Design/PropertyFilterTab/propertyFilterTab";
import HelpSection from "@/components/Design/Help/helpSection";
import FaqTopArticle from "@/components/Design/Help/faqTopArticle";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";

export default function HelpPage() {
  return (
    <div className={styles.helpPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <PropertyFilterTab />
      <HelpSection />
      <FaqTopArticle />
    </div>
  );
}


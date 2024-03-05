import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./legalLanding.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import MainLegalLanding from "@/components/Design/LegalLanding/mainLegalLanding";


export default function LegalLanding() {
  return (
    <div className={styles.legalLandingPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <MainLegalLanding />
    </div>
  );
}


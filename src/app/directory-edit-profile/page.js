import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./directoryEditProfile.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import DirectoryProfileEditSection from "@/components/Design/DirectoryProfile/directoryProfile";

export default function DirectoryEditProfile() {
  return (
    <div className={styles.directoryEditProfile}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <DirectoryProfileEditSection />
    </div>
  );
}


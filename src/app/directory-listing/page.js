import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./directoryListing.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import DirectoryMainListing from "@/components/Design/DirectoryMainListing/directoryMainListing";
import AboutLeftImg from "@/components/Design/AboutLeftImg/aboutLeftImg";
import DirectorySearch from "@/components/Design/DirectorySearch/directorySearch";

export default function DirectoryListingPage() {
  return (
    <div className={styles.directoryListingPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <DirectorySearch />
      <DirectoryMainListing />
      <AboutLeftImg />
    </div>
  );
}


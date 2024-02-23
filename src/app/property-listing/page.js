import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./propertyListing.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import PropertyFilterTab from "@/components/Design/PropertyFilterTab/propertyFilterTab";
import PropertyListingSection from "@/components/Design/PropertyListingSection/propertyListingSection";

export default function PropertyListing() {
  return (
    <div className={styles.propertyListingPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <PropertyFilterTab />
      <PropertyListingSection />
    </div>
  );
}


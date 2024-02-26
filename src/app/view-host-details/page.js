import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./viewHostDetails.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import LocationReview from "@/components/Design/LocationReview/locationReview";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import TrendingLocations from "@/components/Design/TrendingLocations/trendingLocations";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import LatestNews from "@/components/Design/LatestNews/latestNews";
import HostDetail from "@/components/Design/HostDetail/hostDetail";

export default function ViewHostDetails() {
  return (
    <div className={styles.viewHostDetails}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <HostDetail />
      <LocationReview />
      <TrendingLocations />
      <AboutRightImg />
      <LatestNews />
    </div>
  );
}

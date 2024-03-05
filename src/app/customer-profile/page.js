import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./customerProfile.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import TrendingLocations from "@/components/Design/TrendingLocations/trendingLocations";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import LatestNews from "@/components/Design/LatestNews/latestNews";
import ProfileDetail from "@/components/Design/ProfileDetail/profileDetail";

function Layout({ children }) {
  return (
    <div className={styles.customerProfile}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <ProfileDetail />
      <TrendingLocations />
      <AboutRightImg />
      <LatestNews />
    </div>
  );
}
export default Layout;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./customerBookingRequested.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import YourBookingSection from "@/components/Design/YourBooking/yourBookings";
import LocationDirectory from "@/components/Design/LocationDirectory/locationDirectory";
import TrendingLocations from "@/components/Design/TrendingLocations/trendingLocations";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import LatestNews from "@/components/Design/LatestNews/latestNews";

function Layout({ children }) {
  return (
    <div className={styles.customerBookingRequested}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <YourBookingSection />
      <LocationDirectory />
      <TrendingLocations />
      <AboutRightImg />
      <LatestNews />
    </div>
  );
}

export default Layout;

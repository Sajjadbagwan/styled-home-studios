import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./location-detail.module.scss";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import LocationGallery from "@/components/Design/LocationGallery/locationGallery";
import LocationInfo from "@/components/Design/LocationInfo/locationInfo";
import LocationInfowithform from "@/components/Design/LocationInfoWithForm/locationInfowithform";
import LocationReview from "@/components/Design/LocationReview/locationReview";

import LatestNews from "@/components/Design/LatestNews/latestNews";

function Layout({ children }) {
  return (
    <div className={styles.locationDetail}>
      <Breadcrumb />
      <LocationGallery />
      <LocationInfo />
      <LocationInfowithform />
      <LocationReview />

      <LatestNews/>
    </div>
  );
}

export default Layout;

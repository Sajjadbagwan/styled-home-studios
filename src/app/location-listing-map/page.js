import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./location-listing-map.module.scss";
import TittleBanner from "@/components/Design/TittleBanner/tittleBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import LocationListingMap from "@/components/Design/LocationListingMap/locationListingMap";

function Layout({ children }) {
  return (
    <div className={styles.locationListing}>
      <TittleBanner />
      <Breadcrumb />
      <LocationListingMap />
    </div>
  );
}

export default Layout;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./location-listing.module.scss";
import TittleBanner from "@/components/Design/TittleBanner/tittleBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import LocationListing from "@/components/Design/LocationListing/locationListing";

function Layout({ children }) {
  return (
    <div className={styles.locationListing}>
      <TittleBanner />
      <Breadcrumb />
      <LocationListing />
    </div>
  );
}

export default Layout;

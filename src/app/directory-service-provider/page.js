import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./directoryServiceProvider.module.scss";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import LocationGallery from "@/components/Design/LocationGallery/locationGallery";
import HostTestimonials from "@/components/Design/AboutUs/hostTestimonial";
import TrendingLocations from "@/components/Design/TrendingLocations/trendingLocations";
import AboutArtist from "@/components/Design/AboutArtist/aboutArtist";

export default function DirectorySerivceProviderPage() {
  return (
    <div className={styles.directorySerivceProviderPage}>
      <Breadcrumb />
      <LocationGallery />
      <AboutArtist />
      <HostTestimonials />
      <TrendingLocations />
    </div>
  );
}


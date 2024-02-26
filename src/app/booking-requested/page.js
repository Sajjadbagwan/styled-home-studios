import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./bookingRequested.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import YourBookingSection from "@/components/Design/YourBooking/yourBookings";

export default function BookingRequested() {
  return (
    <div className={styles.bookingRequestedPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <YourBookingSection />
    </div>
  );
}


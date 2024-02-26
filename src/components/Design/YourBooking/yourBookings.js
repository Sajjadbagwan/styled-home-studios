"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./yourBooking.module.scss";
import BookingSidebar from "@/components/Design/YourBooking/bookingSidebar";
import MainBookingSection from "@/components/Design/YourBooking/mainBooking";

function YourBookingSection() {
  
  return (
    <div className={styles.yourBookingPage}>
      <div className="container">
        <div className="bookingDiv">
            <BookingSidebar />
            <MainBookingSection />
        </div>
      </div>
    </div>
  );
}

export default YourBookingSection;

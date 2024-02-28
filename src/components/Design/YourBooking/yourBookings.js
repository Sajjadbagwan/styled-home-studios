"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./yourBooking.module.scss";
import BackArrow from "../../../../public/assets/images/back-arrow.svg"
import BookingSidebar from "@/components/Design/YourBooking/bookingSidebar";
import MainBookingSection from "@/components/Design/YourBooking/mainBooking";

function YourBookingSection() {
  const [openSidebar, setSidebar] = useState(false);

    const handleSidebar = result => {
        setSidebar(result);
    };
  return (
    <div className={styles.yourBookingPage}>
      <div className="container">
        <div className="bookingDiv">
            <div className={openSidebar ? 'sidebarDiv hide' : 'sidebarDiv show'}>
              <BookingSidebar handleSidebar={handleSidebar} />
            </div>
            <div className={openSidebar ? 'rightSide show' : 'rightSide hide'}>
              <Link className="backbtn" onClick={() => handleSidebar(false)} href=""> <Image src={BackArrow} alt="backarrow" height={14} width={9}></Image> Back To Your Bookings </Link>
              <MainBookingSection />
            </div>
        </div>
      </div>
    </div>
  );
}

export default YourBookingSection;

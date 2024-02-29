"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../YourBooking/yourBooking.module.scss";
import BackArrow from "../../../../public/assets/images/back-arrow.svg"
import AccountSidebar from "@/components/Design/AccountHostAccountSection/accountSidebar";
import YourProfileSection from "@/components/Design/AccountHostAccountSection/yourProfile";

function AccountHostProfileEditSection() {
  const [openSidebar, setSidebar] = useState(false);

    const handleSidebar = result => {
        setSidebar(result);
    };
  return (
    <div className={styles.yourBookingPage}>
      <div className="container">
        <div className="bookingDiv">
            <div className={openSidebar ? 'sidebarDiv hide' : 'sidebarDiv show'}>
              <AccountSidebar handleSidebar={handleSidebar} />
            </div>
            <div className={openSidebar ? 'rightSide show' : 'rightSide hide'}>
              <Link className="backbtn" onClick={() => handleSidebar(false)} href=""> <Image src={BackArrow} alt="backarrow" height={14} width={9}></Image> Back To Your Bookings </Link>
              <YourProfileSection />
            </div>
        </div>
      </div>
    </div>
  );
}

export default AccountHostProfileEditSection;

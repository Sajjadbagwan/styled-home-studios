"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./customerBookingSummery.module.scss";
import BookingOrderSummary from "../../BookingOrderSummary/bookingOrderSummary";

function CustomerBookingSummery() {
  return (
    <div className={styles.customerBookingSummery}>
      <div className="summaryBox">
        <div className="bookingInfo">
          <div className="bookingBtns">
            <Link href="#" className="allBtn dark border">
              Edit Booking Request
            </Link>
            <Link href="#" className="allBtn border">
              Message Host
            </Link>
            <Link href="#" className="link">
              Cancel Request
            </Link>
          </div>
        </div>
        <div className="revenueBox">
          <BookingOrderSummary />
        </div>
      </div>
    </div>
  );
}

export default CustomerBookingSummery;

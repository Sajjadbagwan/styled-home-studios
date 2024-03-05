"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./bookingDetailBox.module.scss";

function BookingDetailBox() {
  return (
    <div className={styles.bookingDetailBox}>
      <div className="bookingInfo">
        <h3>Details</h3>
        <div className="infoList">
          <div className="list">
            <span>Crew</span>
            <span>4 People</span>
          </div>
        </div>
        <h5>Message</h5>
        <p>
          Hi, love the property, is there anywhere suitable for us to stay in
          the surrounding area that you can recommend?
        </p>
        <div className="twoBtns">
          <Link href="#" className="allBtn dark border">
            View booking request
          </Link>
          <Link href="#" className="allBtn border">
            Message Host
          </Link>
          <Link href="#" className="link">
            Cancel Request
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingDetailBox;

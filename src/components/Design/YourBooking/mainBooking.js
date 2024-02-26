"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../../../../public/assets/images/down-arrow.svg"
import BookingRequested from "../../../../public/assets/images/requested-booking.svg"
import styles from "./mainBooking.module.scss";

function MainBookingSection() {
  
  return (
    <div className={styles.mainBookingSection}>
      <h3>Requested Bookings</h3>
      <hr/>
      <form>
      <div>
            <label>Search</label>
            <input
            type="text"
            placeholder="Customer Name, Order ID"
            name="search"
            />
        </div>
        <button type="submit">
                <Image
                src="/assets/images/search.svg"
                width={24}
                height={24}
                alt=""
                />
            </button>
      </form>
      <div className="bookingsData">
        <div className="singleBooking">
            <div className="bookingId">
                <h3>Booking #003</h3>
                <Link href="">Decline Request</Link>
                <p>Bright and Light Townhouse – N1</p>
            </div>
            <div className="requestDate">
                <Image src={BookingRequested} height={35} width={35} alt="requested"/>
                <div className="dateTime">
                    <span>Booking Requested</span>
                    <span>Requested on 04th July 2023 by Sarah</span>
                </div>
            </div>
            <button type="button">
                <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
            </button>
        </div>
      </div>
    </div>
  );
}

export default MainBookingSection;

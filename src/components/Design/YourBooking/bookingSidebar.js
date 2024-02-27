"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./bookingSidebar.module.scss";

function BookingSidebar() {
  
  return (
    <div className={styles.bookingSidebarPage}>
      <ul>
        <li>
            <Link href="">Requested Bookings</Link>
        </li>
        <li>
            <Link className="activeSidebar" href="">Confirmed Bookings</Link>
        </li>
        <li>
            <Link href="">Booking History</Link>
        </li>
      </ul>
    </div>
  );
}

export default BookingSidebar;

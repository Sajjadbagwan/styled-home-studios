"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./bookingSidebar.module.scss";

function BookingSidebar (props) {
  
  return (
    <div className={styles.bookingSidebarPage}>
      <ul>
        <li>
            <Link onClick={() => props.handleSidebar(true)} className="activeSidebar" href="">Requested Bookings</Link>
        </li>
        <li>
            <Link onClick={() => props.handleSidebar(true)} href="">Confirmed Bookings</Link>
        </li>
        <li>
            <Link onClick={() => props.handleSidebar(true)} href="">Booking History</Link>
        </li>
      </ul>
    </div>
  );
}

export default BookingSidebar;

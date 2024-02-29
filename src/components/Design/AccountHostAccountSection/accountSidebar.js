"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../YourBooking/bookingSidebar.module.scss";

function AccountSidebar (props) {
  
  return (
    <div className={styles.bookingSidebarPage}>
      <ul>
        <li>
            <Link onClick={() => props.handleSidebar(true)} className="activeSidebar" href="">Your Profile</Link>
        </li>
        <li>
            <Link onClick={() => props.handleSidebar(true)} href="">Password</Link>
        </li>
        <li>
            <Link onClick={() => props.handleSidebar(true)} href="">ID</Link>
        </li>
      </ul>
    </div>
  );
}

export default AccountSidebar;

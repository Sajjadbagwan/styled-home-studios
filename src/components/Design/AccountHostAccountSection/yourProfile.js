"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./yourProfile.module.scss";
import BackArrow from "../../../../public/assets/images/back-arrow.svg"
import YourProfileInformation from "@/components/Design/AccountHostAccountSection/yourProfileInformation";
import ChangePassword from "@/components/Design/AccountHostAccountSection/changePassword";
import YourId from "@/components/Design/AccountHostAccountSection/yourId";

function YourProfileSection() {

  return (
    <div className={styles.yourProfileSection}>
        <h3>Your Profile</h3>
        <hr/>
        <YourProfileInformation />
        <ChangePassword />
        <YourId />
    </div>
  );
}

export default YourProfileSection;

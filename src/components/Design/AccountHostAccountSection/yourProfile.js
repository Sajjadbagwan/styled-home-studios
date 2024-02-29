"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./yourProfile.module.scss";
import BackArrow from "../../../../public/assets/images/back-arrow.svg"
import YourProfileInformation from "@/components/Design/AccountHostAccountSection/yourProfileInformation";

function YourProfileSection() {

  return (
    <div className={styles.yourProfileSection}>
        <h3>Your Profile</h3>
        <hr/>
        <YourProfileInformation />
    </div>
  );
}

export default YourProfileSection;

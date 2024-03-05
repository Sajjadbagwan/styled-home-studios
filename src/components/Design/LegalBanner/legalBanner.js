"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//import MainBanner from "../../../../public/assets/images/Bugle-2-1-scaled.jpg"
import styles from "./legalBanner.module.scss";

function LegalBanner() {
  return (
    <div className={styles.titleWithTextBanner + " " + styles.legalBanner}>
      <div className="heroImg overlayInner">
        {/* <Image
          src={MainBanner}
          width={1920}
          height={247}
          sizes="100vw"
          priority
          alt=""
        /> */}
      </div>
      <div className="container">
        <div className="titleText">
          <h1>Terms & Conditions Page</h1>
        </div>        
      </div>
    </div>
  );
}

export default LegalBanner;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MainBanner from "../../../../public/assets/images/Bugle-2-1-scaled.jpg"
import styles from "./titleWithTextBanner.module.scss";

function TitleWithTextBanner() {
  return (
    <div className={styles.titleWithTextBanner}>
      <div className="heroImg overlayInner">
        <Image
          src={MainBanner}
          width={1920}
          height={247}
          sizes="100vw"
          priority
          alt=""
        />
      </div>
      <div className="container">
        <div className="titleText">
          <div className="titleCont">
            <h1>Become a styled home studio’s Host</h1>
            <p>Join our community of hosts, earn extra money and see your home become a hub ion creativity.</p>         
          </div>
          <div className="buttonContainer">
            <Link href="" className="allBtn border dark">Join the directory</Link>       
            <Link href="" className="allBtn border dark">Book your team</Link>       
          </div>
          
        </div> 
        
      </div>
    </div>
  );
}

export default TitleWithTextBanner;

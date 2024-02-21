"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThankyouIcon from "../../../../public/assets/images/thankyou-property.svg";
import styles from "./becomeAhostThankYouMessage.module.scss";

function BecomeAhostThankYouMessage() {
  return (
    <div className={styles.becomeAhostThankYouMessage}>
      <div className="container">
        <div className="titleText">
            <div className="icon-img">
                <Image src={ThankyouIcon} height={85} width={85} alt="thank-icon"/>
            </div>
            <div className="contentText">
                <h2>Thank You For Submitting Your Property Details</h2>
                <p>Our team will now review what you have submitted and you will have a notification once we approve.</p>
            </div>            
        </div>        
      </div>
    </div>
  );
}

export default BecomeAhostThankYouMessage;

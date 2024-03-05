"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./landingFaq.module.scss";
import FaqContent from "../Help/faqContent";

function LandingFaq() {
  return (
    <div className={styles.landingFaqSection + " landingFaqSection"}>
        <div className="container">
            <div className="title titleDouble">
                <div>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <Link href="/help/">View All FAQs</Link>
            </div>
            <FaqContent />    
      </div>
    </div>
  );
}

export default LandingFaq;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./mainLegalLanding.module.scss";

function MainLegalLanding() {
  return (
    <section className={styles.mainLegalLanding}>
      <div className="container">
        <ul>
            <li>
                <h3>Terms & Conditions</h3>
                <Link href="/legal-page/" className="allBtn border dark">Read More</Link>
            </li>
            <li>
                <h3>Cookie Policy</h3>
                <Link href="/legal-page/" className="allBtn border dark">Read More</Link>
            </li>
            <li>
                <h3>Disclaimer</h3>
                <Link href="/legal-page/" className="allBtn border dark">Read More</Link>
            </li>
            <li>
                <h3>Policy 4</h3>
                <Link href="/legal-page/" className="allBtn border dark">Read More</Link>
            </li>
            <li>
                <h3>Policy 5</h3>
                <Link href="/legal-page/" className="allBtn border dark">Read More</Link>
            </li>
        </ul>
      </div>
    </section>
  );
}

export default MainLegalLanding;

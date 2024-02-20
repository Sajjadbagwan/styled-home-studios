"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./bottomBoxes.module.scss";

function BottomBoxes() {
  return (
    <section className={styles.bottomBoxes}>
      <div className="backImg overlay">
        <Image
          src="/assets/images/bottom-box.png"
          width={1920}
          height={694}
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="container">
        <div className="ctaData">
          <div className="boxInfo">
            <h3>Book A Location</h3>
            <Link href="#" className="allBtn dark">
              Find location
            </Link>
          </div>
          <div className="boxInfo">
            <h3>Become A Host</h3>
            <Link href="#" className="allBtn dark">
              List your property
            </Link>
          </div>
          <div className="boxInfo">
            <h3>Book Your Team</h3>
            <Link href="#" className="allBtn dark">
              Book A Creative
            </Link>
          </div>
          <div className="boxInfo">
            <h3>Join Our Directory</h3>
            <Link href="#" className="allBtn dark">
              Get booked as a creative
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BottomBoxes;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ourTopPick.module.scss";

function OurTopPick() {
  return (
    <section className={styles.ourTopPick}>
      <div className="container">
        <div className="picImg">
          <Image
            src="/assets/images/trending.png"
            width={1920}
            height={698}
            sizes="100vw"
            alt=""
          />
        </div>
        <div className="picDetail">
          <div className="inner">
            <div className="titleDouble line">
              <span>Our Top Pick</span>
              <h2>Wabi Sabi Inspiration - E11</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia.
            </p>
            <div className="twoBtns">
              <Link href="#" className="allBtn dark">
                Book Now
              </Link>
              <Link href="#">View All Wabi Sabi</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTopPick;

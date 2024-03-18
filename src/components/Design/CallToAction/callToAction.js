"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./callToAction.module.scss";

function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className="backImg overlay">
        <Image
          src="/assets/images/trending.png"
          width={1920}
          height={698}
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="container">
        <div className="ctaData">
          <h2>How To Become A Host</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillu.
          </p>
          <Link href="/become-a-host/" className="allBtn">
          List your property
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;

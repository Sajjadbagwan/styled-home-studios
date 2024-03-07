"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./aboutArtist.module.scss";

function AboutArtist() {
  return (
    <div className={styles.aboutArtistSection}>
      <div className="container">
        <div className="hostSlider">
          <div className="slide">
            <div className="hostLeft">
              <div className="slideImg">
                <Image
                  src="/assets/images/team2.jpg"
                  alt="host"
                  width={285}
                  height={285}
                />
              </div>
            </div>
            <div className="hostRight">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <Link href="#" className="allBtn dark border">
              Contact Creative
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutArtist;

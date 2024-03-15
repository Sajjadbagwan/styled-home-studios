"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./aboutRightImg.module.scss";

function AboutRightImg() {
  return (
    <section className={styles.aboutRightImg + " aboutRightImg"}>
      <div className="container">
        <div className="row">
          <div className="aboutInfo">
            <div className="titleDouble line">
              <span>About</span>
              <h2>Styled Home Studios</h2>
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
            <Link href="/about-us/" className="allBtn dark">
              Discover Now
            </Link>
          </div>
          <div className="aboutImg">
            <div className="innerImg">
              <div className="imgFront">
                <Image
                  src="/assets/images/about-1.png"
                  width={428}
                  height={706}
                  alt=""
                />
              </div>
              <div className="imgBack">
                <Image
                  src="/assets/images/about-2.png"
                  width={425}
                  height={483}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutRightImg;

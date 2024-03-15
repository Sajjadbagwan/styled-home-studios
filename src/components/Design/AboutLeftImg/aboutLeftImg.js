"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./aboutLeftImg.module.scss";

function AboutLeftImg() {
  return (
    <section className={styles.aboutLeftImg + " aboutLeftImg"}>
      <div className="container">
        <div className="row">
          <div className="aboutImg">
            <div className="innerImg">
              <div className="imgFront">
                <Image
                  src="/assets/images/about-11.png"
                  width={474}
                  height={474}
                  alt=""
                />
                <div className="imgInfo">
                  <h4>Evie MCDaniels</h4>
                  <div>
                    <span>Photographer</span>
                    <span>
                      <Image
                        src="/assets/images/location.svg"
                        width={12}
                        height={16}
                        alt=""
                      />
                      London
                    </span>
                  </div>
                </div>
              </div>
              <div className="imgBack">
                <Image
                  src="/assets/images/about-22.png"
                  width={340}
                  height={344}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="aboutInfo">
            <div className="titleDouble line">
              <span>Meet creatives</span>
              <h2>The Styled Home Studio Directory</h2>
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
              <Link href="/directory-listing/" className="allBtn dark">
                Discover Now
              </Link>
              <Link href="/create-an-account/">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutLeftImg;

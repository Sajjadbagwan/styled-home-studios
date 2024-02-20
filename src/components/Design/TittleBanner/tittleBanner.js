"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./tittleBanner.module.scss";

function TittleBanner() {
  return (
    <section className={styles.tittleBanner}>
      <div className="heroImg overlayInner">
        <Image
          src="/assets/images/tittle-banner.png"
          width={1920}
          height={247}
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="container">
        <div className="heroDetail">
          <div className="inner">
            <form>
              <div>
                <label>Location</label>
                <input
                  type="text"
                  placeholder="London, Edinburgh, Yorkshire"
                  name="search"
                />
              </div>
              <div>
                <label>Keywords</label>
                <input
                  type="text"
                  placeholder="Kitchen, Garden, Bedroom"
                  name="search"
                />
              </div>
              <button type="submit">
                <Image
                  src="/assets/images/search.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TittleBanner;

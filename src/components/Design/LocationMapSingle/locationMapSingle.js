"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./locationMapSingle.module.scss";

function LocationMapSingle() {
  return (
    <section className={styles.locationMapSingle}>
      <div className="container">
        <div className="titleDouble line dark">
          <span>Location</span>
          <h2>Where You’ll Be</h2>
        </div>

        <div className="singleMap">
          <Image
            src="/assets/images/single-map.png"
            width={1638}
            height={710}
            sizes="100vw"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default LocationMapSingle;

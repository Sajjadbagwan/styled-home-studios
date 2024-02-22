"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "@mui/lab/Masonry";
import styles from "./locationInfo.module.scss";

function LocationInfo() {
  return (
    <section className={styles.locationInfo}>
      <div className="container">
        <div className="aboutinfo">
          <div class="titleDouble line">
            <span>About</span>
            <h2>Bright And Light Townhouse – N1</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex <Link href="#">Read More</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LocationInfo;

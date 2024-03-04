"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./hostDetail.module.scss";
import TrendingLocations from "../TrendingLocations/trendingLocations";
import SingleHostDetail from "../SingleHostDetail/singleHostDetail";

function HostDetail() {
  return (
    <section className={styles.hostDetail}>
      <div className="container">
        <div className="row">
          <div className="hostLeft">
            <SingleHostDetail />
          </div>
          <div className="hostRight">
            <TrendingLocations />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HostDetail;

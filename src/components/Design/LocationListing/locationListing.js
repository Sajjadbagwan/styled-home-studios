"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./locationListing.module.scss";
import LocationFilter from "../LocationFilter/locationFilter";
import LocationGrid from "../LocationGrid/locationGrid";

function LocationListing() {
  return (
    <section className={styles.locationListing}>
      <div className="container">
        <div className="row">
          <LocationFilter />
          <LocationGrid />
        </div>
      </div>
    </section>
  );
}

export default LocationListing;

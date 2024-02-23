"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./locationListingMap.module.scss";
import LocationFilter from "../LocationFilter/locationFilter";
import MapResults from "../MapResults/mapResults";

function LocationListingMap() {
  return (
    <section className={styles.locationListing}>
      <div className="container">
        <div className="row">
          <LocationFilter />
          <MapResults />
        </div>
      </div>
    </section>
  );
}

export default LocationListingMap;

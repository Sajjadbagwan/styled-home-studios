"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./locationFilter.module.scss";

function LocationFilter() {
  return (
    <section className={styles.locationFilter}>
      <div className="container">
        <div className="filterMain">
          <Link href="#" className="allBtn dark border">
            Show results as map
          </Link>

          <ul className="filterCat">
            <li>
              <Link href="#">Category 1</Link>
            </li>
            <li>
              <Link href="#">Category 2</Link>
            </li>
            <li>
              <Link href="#">Category 3</Link>
            </li>
            <li>
              <Link href="#">Category 4</Link>
            </li>
            <li>
              <Link href="#">Category 5</Link>
            </li>
          </ul>

          <Link href="#" className="allBtn border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.686"
              height="10.75"
              viewBox="0 0 19.686 10.75"
            >
              <g
                id="Group_4557"
                data-name="Group 4557"
                transform="translate(-1699.864 -71.694)"
              >
                <path
                  id="Path_4007"
                  data-name="Path 4007"
                  d="M3689.864,72.069h19.686"
                  transform="translate(-1990)"
                  fill="none"
                  stroke="#20535a"
                  stroke-width="0.75"
                />
                <path
                  id="Path_4008"
                  data-name="Path 4008"
                  d="M3689.864,72.069h19.686"
                  transform="translate(-1990 5)"
                  fill="none"
                  stroke="#20535a"
                  stroke-width="0.75"
                />
                <path
                  id="Path_4009"
                  data-name="Path 4009"
                  d="M3689.864,72.069h19.686"
                  transform="translate(-1990 10)"
                  fill="none"
                  stroke="#20535a"
                  stroke-width="0.75"
                />
              </g>
            </svg>
            Filter
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LocationFilter;

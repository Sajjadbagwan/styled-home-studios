"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./locationFilter.module.scss";
import FilterPopup from "../FilterPopup/filterPopup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LocationFilter() {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className={styles.locationFilter}>
      <div className="container">
        <div className="filterMain">
          <Link href="/location-listing-map" className="allBtn dark border">
            Show results as map
          </Link>

          <Slider {...settings} className="filterCat">
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
          </Slider>

          <FilterPopup />
        </div>
      </div>
    </section>
  );
}

export default LocationFilter;

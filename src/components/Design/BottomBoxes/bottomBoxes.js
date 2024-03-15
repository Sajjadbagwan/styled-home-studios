"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./bottomBoxes.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BottomBoxes() {
  const settings = {
    dots: true,
    arrows: false,
    slidesToScroll: 1,
    settings: "unslick",
    responsive: [
      {
        breakpoint: 3840,
        settings: "unslick",
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.bottomBoxes}>
      <div className="backImg overlay">
        <Image
          src="/assets/images/bottom-box.png"
          width={1920}
          height={694}
          sizes="100vw"
          alt=""
        />
      </div>
      <div className="container">
        <Slider {...settings} className="ctaData sliderDots">
          <div className="boxInfo">
            <h3>Book A Location</h3>
            <Link href="/location-listing-map/" className="allBtn dark">
              Find location
            </Link>
          </div>
          <div className="boxInfo">
            <h3>Become A Host</h3>
            <Link href="/become-a-host/ " className="allBtn dark">
              List your property
            </Link>
          </div>
          <div className="boxInfo">
            <h3>Book Your Team</h3>
            <Link href="/directory-listing/" className="allBtn dark">
              Book A Creative
            </Link>
          </div>
          <div className="boxInfo">
            <h3>Join Our Directory</h3>
            <Link href="/join-directory/" className="allBtn dark">
              Get booked as a creative
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default BottomBoxes;

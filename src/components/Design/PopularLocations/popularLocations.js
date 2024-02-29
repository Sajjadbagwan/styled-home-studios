"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./popularLocations.module.scss";

function PopularLocations() {
  const sliderData = [
    {
      image: "/assets/images/location-1.png",
      category: "Greater London",
    },
    {
      image: "/assets/images/location-2.png",
      category: "South East",
    },
    {
      image: "/assets/images/location-3.png",
      category: "South West",
    },
    {
      image: "/assets/images/location-4.png",
      category: "East Midlands",
    },
    {
      image: "/assets/images/location-1.png",
      category: "Greater London",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "8%",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "5%",
        },
      },
    ],
  };

  return (
    <section className={styles.popularLocations}>
      <div className="container">
        <div className="title">
          <h2>Popular Locations</h2>
          <Link href="#">Browse Our Locations</Link>
        </div>
        <Slider {...settings} className="styleSlider sliderDots">
          {sliderData.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slideInfo">
                <Image src={slide.image} width={367} height={360}></Image>
                <h3>{slide.category}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default PopularLocations;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./browseByColour.module.scss";

function BrowseByColour() {
  const sliderData = [
    {
      image: "/assets/images/color-1.png",
      category: "White",
    },
    {
      image: "/assets/images/color-2.png",
      category: "Neutral",
    },
    {
      image: "/assets/images/color-3.png",
      category: "Brown",
    },
    {
      image: "/assets/images/color-4.png",
      category: "Dark Wood",
    },
    {
      image: "/assets/images/color-5.png",
      category: "Green",
    },
    {
      image: "/assets/images/color-6.png",
      category: "Blue",
    },
    {
      image: "/assets/images/color-1.png",
      category: "White",
    },
    {
      image: "/assets/images/color-2.png",
      category: "Neutral",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "12%",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "18%",
        },
      },
    ],
  };

  return (
    <section className={styles.browseByColour}>
      <div className="container">
        <h2>Browse By Colour</h2>
        <Slider {...settings} className="styleSlider sliderDots">
          {sliderData.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slideInfo">
                <Image src={slide.image} width={242} height={328}></Image>
                <h3>{slide.category}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default BrowseByColour;

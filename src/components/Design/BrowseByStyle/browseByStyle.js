"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./browseByStyle.module.scss";

function BrowseByStyle() {
  const sliderData = [
    {
      image: "/assets/images/style-1.png",
      category: "Modern",
    },
    {
      image: "/assets/images/style-2.png",
      category: "The 70s return",
    },
    {
      image: "/assets/images/style-3.png",
      category: "Farmhouse",
    },
    {
      image: "/assets/images/style-4.png",
      category: "Mid century",
    },
    {
      image: "/assets/images/style-5.png",
      category: "Scandi",
    },
    {
      image: "/assets/images/style-6.png",
      category: "Industrial",
    },
    {
      image: "/assets/images/style-1.png",
      category: "Modern",
    },
    {
      image: "/assets/images/style-2.png",
      category: "The 70s return",
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
          centerPadding: "18%",
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
    <section className={styles.browseByStyle}>
      <div className="container">
        <h2>Browse By Style</h2>
        <Slider {...settings} className="styleSlider sliderDots">
          {sliderData.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slideInfo">
                <Image src={slide.image} width={242} height={328} alt="image-style"></Image>
                <h3>{slide.category}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default BrowseByStyle;

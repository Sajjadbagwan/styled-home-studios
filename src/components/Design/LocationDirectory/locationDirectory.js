"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./locationDirectory.module.scss";

function LocationDirectory() {
  const sliderData = [
    {
      image: "/assets/images/host-1.png",
      name: "Adam A",
      profession: "Photographer",
      location: "London",
    },
    {
      image: "/assets/images/host-2.png",
      name: "Kimberly A",
      profession: "Photographer",
      location: "London",
    },
    {
      image: "/assets/images/host-3.png",
      name: "Jessica A",
      profession: "Photographer",
      location: "London",
    },
    {
      image: "/assets/images/dummy.png",
      name: "Sophie A",
      profession: "Photographer",
      location: "London",
    },
  ];

  return (
    <section className={styles.locationDirectory}>
      <div className="container">
        <div className="hostSlider">
          <div className="titleDouble line dark">
            <span>Meet creatives</span>
            <h2>Our Directory - Creatives In This Area</h2>
          </div>
          <div className="allDirectory">
            {sliderData.map((slide, index) => (
              <div key={index} className="slide">
                <div className="slideImg">
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    width={285}
                    height={285}
                  />
                </div>
                <div className="slideInfo">
                  <div className="subDetail">
                    <h3>{slide.name}</h3>
                  </div>
                  <div className="subDetailLast">
                    <p>{slide.profession}</p>
                    <p>
                      <Image
                        src="/assets/images/location.svg"
                        width={12}
                        height={16}
                        alt=""
                      />
                      {slide.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationDirectory;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./favouritesGroupList.module.scss";

function FavouritesGroupList() {
  const sliderData = [
    {
      image: "/assets/images/group.png",
      title: "Favourite List Group Name",
    },
    {
      image: "/assets/images/group-2.png",
      title: "Favourite List Group Name",
    },
    {
      image: "/assets/images/group-1.png",
      title: "Favourite List Group Name",
    },
  ];

  return (
    <div className={styles.favouritesGroupList}>
      <div className="container">
        <div className="allLocation sliderDots">
          {sliderData.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slideImg">
                <div>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={474}
                    height={325}
                  />
                </div>
              </div>
              <div className="slideInfo">
                <h3>{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <Link href="#" className="allBtn dark">
          View more
        </Link>
      </div>
    </div>
  );
}

export default FavouritesGroupList;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./requestBookingSlider.module.scss";

function RequestBookingSlider() {
  const sliderData = [
    {
      images: [
        "/assets/images/trending.png",
        "/assets/images/trending-2.png",
        "/assets/images/trending-3.png",
      ],
      title: "Sophisticated Air SW15",
      category: "new",
      area: "South West",
      star: "4.5",
      rate: "£215",
    },
  ];

  const innersettings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  return (
    <div className={styles.requestBookingSlider}>
      <div className="allLocation sliderDots">
        {sliderData.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slideImg">
              <Slider {...innersettings} className="subLocation">
                {slide.images.map((imageItem, indexI) => {
                  return (
                    <Image
                      id={indexI}
                      key={indexI}
                      src={imageItem}
                      alt={slide.title}
                      width={474}
                      height={325}
                    />
                  );
                })}
              </Slider>
            </div>
            <div className="slideInfo">
              <div className="subDetail">
                <h3>{slide.title}</h3>
                <span className="rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                  >
                    <path
                      id="Polygon_1"
                      data-name="Polygon 1"
                      d="M8.5,0l2.125,5.95L17,6.111,11.938,9.95,13.753,16,8.5,12.422,3.247,16,5.062,9.95,0,6.111,6.375,5.95Z"
                      fill="#20535a"
                    />
                  </svg>
                  {slide.star}
                </span>
              </div>
              <div className="subDetail">
                <p>Area: {slide.area}</p>
                <p>{slide.rate} Per Hour</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RequestBookingSlider;

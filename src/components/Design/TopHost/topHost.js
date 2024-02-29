"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./topHost.module.scss";

function TopHost() {
  const sliderData = [
    {
      image: "/assets/images/host-1.png",
      name: "Adam A",
      member: "16th November 2020",
      listing: "6",
      star: "4.5",
    },
    {
      image: "/assets/images/host-2.png",
      name: "Kimberly A",
      member: "09th January 2022",
      listing: "3",
      star: "4.5",
    },
    {
      image: "/assets/images/host-3.png",
      name: "Jessica A",
      member: "15th April 2022",
      listing: "2",
      star: "4.5",
    },
    {
      image: "/assets/images/dummy.png",
      name: "Sophie A",
      member: "20th March 2023",
      listing: "2",
      star: "4.5",
    },
    {
      image: "/assets/images/host-1.png",
      name: "Adam A",
      member: "16th November 2020",
      listing: "6",
      star: "4.5",
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
          centerPadding: "18%",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "19%",
        },
      },
    ],
  };

  return (
    <section className={styles.topHost}>
      <div className="container">
        <div className="hostSlider">
          <div className="title">
            <h2>Top Host</h2>
          </div>
          <Slider {...settings} className="allLocation sliderDots">
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
                  <div className="subDetailLast">
                    <p>Member Since: {slide.member}</p>
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17.715"
                        height="16.142"
                        viewBox="0 0 17.715 16.142"
                      >
                        <g
                          id="Group_4394"
                          data-name="Group 4394"
                          transform="translate(-522.839 -8007.965)"
                        >
                          <g
                            id="Group_4393"
                            data-name="Group 4393"
                            transform="translate(523.214 8023.731) rotate(-90)"
                          >
                            <path
                              id="Path_613"
                              data-name="Path 613"
                              d="M8.408,0l8.556,6.129V15.3H0V6.129Z"
                              transform="translate(15.304) rotate(90)"
                              fill="none"
                              stroke="#20535a"
                              stroke-width="0.75"
                            />
                          </g>
                          <path
                            id="Path_4000"
                            data-name="Path 4000"
                            d="M4,0,5,2.6l3,.071L5.618,4.353,6.472,7,4,5.435,1.528,7l.854-2.647L0,2.674,3,2.6Z"
                            transform="translate(527.6 8014.159)"
                            fill="#20535a"
                          />
                        </g>
                      </svg>
                      {slide.listing} Listings
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default TopHost;

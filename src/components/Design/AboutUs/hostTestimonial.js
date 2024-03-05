"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HostImageMain from "../../../../public/assets/images/host.png";
import styles from "./hostTestimonial.module.scss";

function HostTestimonials() {
    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
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
    <div className={styles.hostTestimonialSection + " hostTestimonialSection"}>
      <div className="backImg overlay">
        <Image
          src={HostImageMain}
          width={1920}
          height={698}
          sizes="100vw"
          alt="host-main"
        />
      </div>
      <div className="container">
        <div className="ctaData">
            <Slider {...settings} className="hostSay sliderDots">
                <div>
                    <h2>What Our Hosts Have To Say</h2>
                    <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu.”
                    </p>
                    <h5>Name of host, Property name </h5>
                </div>
                <div>
                    <h2>What Our Hosts Have To Say</h2>
                    <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu.”
                    </p>
                    <h5>Name of host, Property name </h5>
                </div>
                <div>
                    <h2>What Our Hosts Have To Say</h2>
                    <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu.”
                    </p>
                    <h5>Name of host, Property name </h5>
                </div>
            </Slider>
        </div>
      </div>
    </div>
  );
}

export default HostTestimonials;

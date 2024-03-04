"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./howDoesItWork.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HowDoesItWork() {
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
    <section className={styles.howDoesItWork + " howDoesItWork"}>
      <Image
        src="/assets/images/work.png"
        width={1920}
        height={698}
        sizes="100vw"
        alt=""
        className="backImg"
      />
      <div className="container">
        <div className="titleDouble line">
          <span>Quick guide</span>
          <h2>How Does It Work?</h2>
        </div>

        <Slider {...settings} className="workList sliderDots">
          <div className="listBox">
            <h3>1. Find Your Ideal Location</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
          <div className="listBox">
            <h3>2. Make Your Request</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
          <div className="listBox">
            <h3>3. Confirm Your Booking</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
          <div className="listBox">
            <h3>4. Arrive & Get Creative</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </div>
        </Slider>

        <div className="centerBtn">
          <Link href="#" className="allBtn">
            Browse our locations
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowDoesItWork;

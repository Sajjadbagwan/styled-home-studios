"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PatternIcon from "../../../../public/assets/images/shape-svg-white.svg"
import styles from "./uspsBlock.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function UspsBlock() {
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
    <section className={styles.uspsBlock + " uspsBlock"}>
      <div className="container">
        <div className="row">
            <Slider {...settings} className="workList sliderDots">
                <div className="column3">
                    <div className="circleDiv">
                        <Image src={PatternIcon} alt="pattern" height={35} width={30} />
                    </div>
                    <h5>USP 1 Lorem Ipsum</h5>
                </div>
                <div className="column3">
                    <div className="circleDiv">
                        <Image src={PatternIcon} alt="pattern" height={35} width={30} />
                    </div>
                    <h5>USP 2 Lorem Ipsum</h5>
                </div>
                <div className="column3">
                    <div className="circleDiv">
                        <Image src={PatternIcon} alt="pattern" height={35} width={30} />
                    </div>
                    <h5>USP 3 Lorem Ipsum</h5>
                </div>
            </Slider>
        </div>
      </div>
    </section>
  );
}

export default UspsBlock;

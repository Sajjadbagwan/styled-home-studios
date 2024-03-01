"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./homeHero.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeHero() {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className={styles.homeHero}>
      <div className="container-fluid">
        <div className="row">
          <div className="heroDetail">
            <div className="inner">
              <h1>handpicked shoot locations for photoshoots & content</h1>
              <form>
                <div>
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="London, Edinburgh, Yorkshire"
                    name="search"
                  />
                </div>
                <div>
                  <label>Keywords</label>
                  <input
                    type="text"
                    placeholder="Kitchen, Garden, Bedroom"
                    name="search"
                  />
                </div>
                <button type="submit">
                  <Image
                    src="/assets/images/search.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </button>
              </form>
              <Slider {...settings} className="ulList">
                <div className="list">
                  <Link href="#">Category 1</Link>
                </div>
                <div className="list">
                  <Link href="#">Category 2</Link>
                </div>
                <div className="list">
                  <Link href="#">Category 3</Link>
                </div>
                <div className="list">
                  <Link href="#">Category 4</Link>
                </div>
                <div className="list">
                  <Link href="#">Category 5</Link>
                </div>
              </Slider>
            </div>
          </div>
          <div className="heroImg">
            <Image
              src="/assets/images/slider.png"
              width={1081}
              height={931}
              sizes="100vw"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;

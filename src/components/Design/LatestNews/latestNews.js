"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./latestNews.module.scss";

function LatestNews() {
  const sliderData = [
    {
      image: "/assets/images/news-1.png",
      category: "tips",
      title:
        "Title of news article goes here on one or two lines of text if needed",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      link: "/",
    },
    {
      image: "/assets/images/news-2.png",
      category: "Inspiration",
      title:
        "Title of news article goes here on one or two lines of text if needed",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      link: "/",
    },
    {
      image: "/assets/images/news-3.png",
      category: "new",
      title:
        "Title of news article goes here on one or two lines of text if needed",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      link: "/",
    },
    {
      image: "/assets/images/news-1.png",
      category: "new",
      title:
        "Title of news article goes here on one or two lines of text if needed",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      link: "/",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.latestNews}>
      <div className="container">
        <div className="title titleDouble line">
          <div>
            <span>Keep up to date</span>
            <h2>Read Our Latest Journal Enteries</h2>
          </div>
          <Link href="#">View All Journal Entries</Link>
        </div>
        <Slider {...settings} className="allLocation sliderDots">
          {sliderData.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slideImg">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={474}
                  height={325}
                />
              </div>
              <div className="slideInfo">
                <div className="titleDouble line">
                  <span className="category">{slide.category}</span>
                  <h3>{slide.title}</h3>
                </div>
                <p>{slide.content}</p>
                <Link href={slide.link}>Read More</Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default LatestNews;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import Shoot1 from "../../../../public/assets/images/shoot1.jpg";
import Shoot2 from "../../../../public/assets/images/shoot2.jpg";
import Shoot3 from "../../../../public/assets/images/shoot3.jpg";
import Shoot4 from "../../../../public/assets/images/shoot4.jpg";
import ShootLogo from "../../../../public/assets/images/brandy-logo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./partOfShoot.module.scss";

function PartOfShootSection() {
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3.7,
    slidesToScroll: 1,
    loop:false,
    infinite:false,
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
    <section className={styles.partOfShootSection}>
        <div className="title titleDouble line">
          <div>
            <span>Check it out</span>
            <h2>Shoots We’ve Been A Part Of</h2>
          </div>
        </div>
        <Slider {...settings} className="styleSlider sliderDots">
            <div className="slide">
              <div className="slideInfo">
                <Image src={Shoot1} width={400} height={670} alt="shoot1"></Image>
              </div>
              <div className="occasion">
                <div className="innerDiv">
                    <Image src={ShootLogo} height={40} width={300} alt="shoot-logo"/>
                    <h4>Shot At: Edinburgh</h4>
                </div>                
              </div>
            </div>
            <div className="slide">
              <div className="slideInfo">
                <Image src={Shoot2} width={400} height={670} alt="shoot2"></Image>
              </div>
              <div className="occasion">
                <div className="innerDiv">
                    <Image src={ShootLogo} height={40} width={300} alt="shoot-logo"/>
                    <h4>Shot At: Edinburgh</h4>
                </div>                
              </div>
            </div>
            <div className="slide">
              <div className="slideInfo">
                <Image src={Shoot3} width={400} height={670} alt="shoot3"></Image>
              </div>
              <div className="occasion">
                <div className="innerDiv">
                    <Image src={ShootLogo} height={40} width={300} alt="shoot-logo"/>
                    <h4>Shot At: Edinburgh</h4>
                </div>                
              </div>
            </div>
            <div className="slide">
              <div className="slideInfo">
                <Image src={Shoot4} width={400} height={670} alt="shoot4"></Image>
              </div>
              <div className="occasion">
                <div className="innerDiv">
                    <Image src={ShootLogo} height={40} width={300} alt="shoot-logo"/>
                    <h4>Shot At: Edinburgh</h4>
                </div>                
              </div>
            </div>
            <div className="slide">
              <div className="slideInfo">
                <Image src={Shoot1} width={400} height={670} alt="shoot1"></Image>
              </div>
              <div className="occasion">
                <div className="innerDiv">
                    <Image src={ShootLogo} height={40} width={300} alt="shoot-logo"/>
                    <h4>Shot At: Edinburgh</h4>
                </div>                
              </div>
            </div>
            <div className="slide">
              <div className="slideInfo">
                <Image src={Shoot2} width={400} height={670} alt="shoot2"></Image>
              </div>
              <div className="occasion">
                <div className="innerDiv">
                    <Image src={ShootLogo} height={40} width={300} alt="shoot-logo"/>
                    <h4>Shot At: Edinburgh</h4>
                </div>                
              </div>
            </div>
        </Slider>
    </section>
  );
}

export default PartOfShootSection;

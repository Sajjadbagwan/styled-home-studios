"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./locationGrid.module.scss";
import WhishListPopup from "../WhishListPopup/whishListPopup";

function LocationGrid() {
  const locationData = [
    {
      image: "/assets/images/trending.png",
      title: "Sophisticated Air SW15",
      area: "South West",
      star: "4.5",
      rate: "£215",
    },
    {
      image: "/assets/images/trending-2.png",
      title: "ELEGANT EDINBURGH TOWNHOUSE EH15",
      area: "Edinburgh",
      star: "4.5",
      rate: "£100",
    },
    {
      image: "/assets/images/trending-3.png",
      title: "Enchanted Modern Elegance RG42",
      area: "Berkshire",
      star: "4.5",
      rate: "£130",
    },
    {
      image: "/assets/images/trending.png",
      title: "Sophisticated Air SW15",
      area: "South West",
      star: "4.5",
      rate: "£215",
    },
    {
      image: "/assets/images/trending-2.png",
      title: "ELEGANT EDINBURGH TOWNHOUSE EH15",
      area: "Edinburgh",
      star: "4.5",
      rate: "£100",
    },
    {
      image: "/assets/images/trending-3.png",
      title: "Enchanted Modern Elegance RG42",
      area: "Berkshire",
      star: "4.5",
      rate: "£130",
    },
    {
      image: "/assets/images/trending.png",
      title: "Sophisticated Air SW15",
      area: "South West",
      star: "4.5",
      rate: "£215",
    },
    {
      image: "/assets/images/trending-2.png",
      title: "ELEGANT EDINBURGH TOWNHOUSE EH15",
      area: "Edinburgh",
      star: "4.5",
      rate: "£100",
    },
    {
      image: "/assets/images/trending-3.png",
      title: "Enchanted Modern Elegance RG42",
      area: "Berkshire",
      star: "4.5",
      rate: "£130",
    },
    {
      image: "/assets/images/trending.png",
      title: "Sophisticated Air SW15",
      area: "South West",
      star: "4.5",
      rate: "£215",
    },
    {
      image: "/assets/images/trending-2.png",
      title: "ELEGANT EDINBURGH TOWNHOUSE EH15",
      area: "Edinburgh",
      star: "4.5",
      rate: "£100",
    },
    {
      image: "/assets/images/trending-3.png",
      title: "Enchanted Modern Elegance RG42",
      area: "Berkshire",
      star: "4.5",
      rate: "£130",
    },
    {
      image: "/assets/images/trending.png",
      title: "Sophisticated Air SW15",
      area: "South West",
      star: "4.5",
      rate: "£215",
    },
    {
      image: "/assets/images/trending-2.png",
      title: "ELEGANT EDINBURGH TOWNHOUSE EH15",
      area: "Edinburgh",
      star: "4.5",
      rate: "£100",
    },
    {
      image: "/assets/images/trending-3.png",
      title: "Enchanted Modern Elegance RG42",
      area: "Berkshire",
      star: "4.5",
      rate: "£130",
    },
    {
      image: "/assets/images/trending.png",
      title: "Sophisticated Air SW15",
      area: "South West",
      star: "4.5",
      rate: "£215",
    },
    {
      image: "/assets/images/trending-2.png",
      title: "ELEGANT EDINBURGH TOWNHOUSE EH15",
      area: "Edinburgh",
      star: "4.5",
      rate: "£100",
    },
    {
      image: "/assets/images/trending-3.png",
      title: "Enchanted Modern Elegance RG42",
      area: "Berkshire",
      star: "4.5",
      rate: "£130",
    },
  ];

  return (
    <section className={styles.locationGrid}>
      <div className="container">
        <div className="LocationMain">
          {locationData.map((location, index) => (

            <div key={index} className="locationBox">
              <Link href="/location-detail/">
                <div className="slideImg">
                  <Image
                    src={location.image}
                    alt="title"
                    width={474}
                    height={325}
                  />
                  <WhishListPopup />
                </div>
                <div className="slideInfo">
                  <div className="subDetail">
                    <h3>{location.title}</h3>
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
                      {location.star}
                    </span>
                  </div>
                  <div className="subDetail">
                    <p>Area: {location.area}</p>
                    <p>{location.rate} Per Hour</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="moreBtn">
          <Link href="#" className="allBtn dark border">
            Load more
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LocationGrid;

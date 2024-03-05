"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./customerProfileReview.module.scss";
import AllReviewPopup from "../CommonPopup/allReviewPopup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomerProfileReview() {
  const [AllReviewIsOpen, SetAllReviewIsOpen] = useState(false);
  const openAllReviewModal = () => {
    SetAllReviewIsOpen(true);
  };

  const closeAllReviewModal = () => {
    SetAllReviewIsOpen(false);
  };

  return (
    <div className={styles.customerProfileReview}>
      <div className="container">
        <div className="allReviews">
          <div className="title">
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35.063"
                height="33"
                viewBox="0 0 35.063 33"
              >
                <path
                  id="Polygon_8"
                  data-name="Polygon 8"
                  d="M17.531,0l4.383,12.272,13.148.333-10.44,7.917L28.366,33,17.531,25.621,6.7,33,10.44,20.522,0,12.6l13.148-.333Z"
                  fill="#20535a"
                />
              </svg>
              4.5
            </h2>
            <span className="link" onClick={openAllReviewModal}>
              View All 37 Reviews
            </span>
          </div>
          <div className="mainReview sliderDots">
            <div className="reviewBox">
              <div className="img">
                <Image
                  src="/assets/images/review.png"
                  width={137}
                  height={137}
                  alt=""
                />
                <div className="info">
                  <h5>Harry A</h5>
                  <p>June 2022</p>
                  <span>
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
                    4.5
                  </span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia.
              </p>
            </div>
            <div className="reviewBox">
              <div className="img">
                <Image
                  src="/assets/images/review.png"
                  width={137}
                  height={137}
                  alt=""
                />
                <div className="info">
                  <h5>Harry A</h5>
                  <p>June 2022</p>
                  <span>
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
                    4.5
                  </span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia.
              </p>
            </div>
          </div>
        </div>
        <AllReviewPopup
          AllReviewIsOpen={AllReviewIsOpen}
          closeAllReviewModal={closeAllReviewModal}
        />
      </div>
    </div>
  );
}

export default CustomerProfileReview;

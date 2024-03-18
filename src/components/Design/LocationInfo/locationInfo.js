"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./locationInfo.module.scss";

function LocationInfo() {
  const [isBookFormClose, setIsBookFormClose] = useState(true);
  const handleBookFormCloseClick = () => {
    setIsBookFormClose(!isBookFormClose);
  };

  return (
    <section className={styles.locationInfo}>
      <div className="container">
        <div className="row">
          <div className="aboutinfo">
            <div class="titleDouble line">
              <span>About</span>
              <h2>Bright And Light Townhouse – N1</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex <Link href="#">Read More</Link>
            </p>
          </div>
          <div className="aboutForm">
            <div className={`${"bookForm"} ${isBookFormClose ? "" : "show"}`}>
              <div className="mobileBook">
                <div className="backBtn">
                  <span onClick={handleBookFormCloseClick} className="link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8.659"
                      height="15.318"
                      viewBox="0 0 8.659 15.318"
                    >
                      <path
                        id="Path_3990"
                        data-name="Path 3990"
                        d="M6.952,0,0,6.952,6.952,13.9"
                        transform="translate(1 0.707)"
                        fill="none"
                        stroke="#20535a"
                        stroke-width="2"
                      />
                    </svg>
                    Back To Bright And Light Townhouse - N1
                  </span>
                </div>
                <h3>Confirm And Pay</h3>
                <div className="productBox">
                  <Image
                    src="/assets/images/gallery.png"
                    width={142}
                    height={46}
                    alt=""
                  />
                  <div className="productInfo">
                    <h4>Bright and Light Townhouse – N1</h4>
                    <span>Area: London, UK</span>
                  </div>
                </div>
              </div>
              <form>
                <h2>£215 Per Hour</h2>
                <p>1 hour minimum booking</p>
                <p>Full day discount 10% off</p>
                <h3>Date & Time</h3>
                <div className="dateFiled">
                  <input type="date"></input>
                </div>
                <div className="timeFiled">
                  <input type="text" placeholder="Start Time"></input>
                  <input type="text" placeholder="End Time"></input>
                </div>
                <Link href="#" className="dayAdd">
                  + Add A Day
                </Link>
                <div className="costBox">
                  <div>
                    <h4>Total Cost</h4>
                    <span>(Including 8% service charge)</span>
                  </div>
                  <h4>£215.00</h4>
                </div>
                <button type="submit" aria-label="book-btn" className="allBtn dark border">
                  Book Now
                </button>
                <div className="askForm">
                  <Link href="#">Message The Host / Ask A Question</Link>
                </div>
              </form>
            </div>
            <div className="mobileBookBtn">
              <div>
                <span>28/06/2024</span>
                <p>£215 Per Hour</p>
              </div>
              <span
                onClick={handleBookFormCloseClick}
                className="allBtn dark border"
              >
                Book Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationInfo;

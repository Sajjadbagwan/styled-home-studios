"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./bookingViewInfo.module.scss";

function BookingViewInfo() {
  return (
    <div className={styles.bookingViewInfo}>
      <div className="container">
        <div className="row">
          <div className="viewTitle">
            <h2>Bright And Light Townhouse – N1</h2>
            <Link href="#">View Listing</Link>
          </div>
          <div className="viewBox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41.18"
              height="41.18"
              viewBox="0 0 41.18 41.18"
            >
              <g
                id="Group_4644"
                data-name="Group 4644"
                transform="translate(-1756.278 -66.278)"
              >
                <g
                  id="Group_4421"
                  data-name="Group 4421"
                  transform="translate(1756.278 66.278)"
                >
                  <g
                    id="Group_4420"
                    data-name="Group 4420"
                    transform="translate(11.543 11.019)"
                  >
                    <g
                      id="Group_4419"
                      data-name="Group 4419"
                      transform="translate(0 16.795) rotate(-90)"
                    >
                      <path
                        id="Path_613"
                        data-name="Path 613"
                        d="M9.228,0l9.39,6.727V16.795H0V6.727Z"
                        transform="translate(16.795) rotate(90)"
                        fill="none"
                        stroke="#fff"
                        stroke-width="1.2"
                      />
                    </g>
                    <text
                      id="_"
                      data-name="!"
                      transform="translate(7.918 2.335)"
                      fill="#fff"
                      font-size="11"
                      font-family="Montserrat-Medium, Montserrat"
                      font-weight="500"
                    >
                      <tspan x="0" y="11">
                        !
                      </tspan>
                    </text>
                  </g>
                  <g
                    id="Ellipse_24"
                    data-name="Ellipse 24"
                    transform="translate(0 0)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="1.2"
                  >
                    <circle cx="20.59" cy="20.59" r="20.59" stroke="none" />
                    <circle cx="20.59" cy="20.59" r="19.99" fill="none" />
                  </g>
                </g>
              </g>
            </svg>
            <div>
              <span>Booking Requested</span>
              <span>Requested on 04th July 2023 by Sarah</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingViewInfo;

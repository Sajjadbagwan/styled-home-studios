"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./singleHostDetail.module.scss";

function SingleHostDetail() {
  return (
    <div className={styles.singleHostDetail}>
      <div className="hostBox">
        <h2>Your Host</h2>
        <div className="slide">
          <div className="slideImg">
            <Image src="/assets/images/host-1.png" width={285} height={285} />
          </div>
          <div className="slideInfo">
            <div className="subDetail">
              <h3>Adam A</h3>
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
                4.5
              </span>
            </div>
            <div className="subDetailLast">
              <p>Member Since: 16th November 2020</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.715"
                  height="16.142"
                  viewBox="0 0 17.715 16.142"
                >
                  <g
                    id="Group_4394"
                    data-name="Group 4394"
                    transform="translate(-522.839 -8007.965)"
                  >
                    <g
                      id="Group_4393"
                      data-name="Group 4393"
                      transform="translate(523.214 8023.731) rotate(-90)"
                    >
                      <path
                        id="Path_613"
                        data-name="Path 613"
                        d="M8.408,0l8.556,6.129V15.3H0V6.129Z"
                        transform="translate(15.304) rotate(90)"
                        fill="none"
                        stroke="#20535a"
                        stroke-width="0.75"
                      />
                    </g>
                    <path
                      id="Path_4000"
                      data-name="Path 4000"
                      d="M4,0,5,2.6l3,.071L5.618,4.353,6.472,7,4,5.435,1.528,7l.854-2.647L0,2.674,3,2.6Z"
                      transform="translate(527.6 8014.159)"
                      fill="#20535a"
                    />
                  </g>
                </svg>
                6 Listings
              </p>
            </div>
          </div>
        </div>
        <Link href="#" className="allBtn dark border">
          Contact Host
        </Link>
      </div>
    </div>
  );
}

export default SingleHostDetail;

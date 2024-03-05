"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./singleCustomerDetail.module.scss";

function SingleCustomerDetail() {
  return (
    <div className={styles.singleCustomerDetail}>
      <div className="hostBox">
        <div className="slide">
          <div className="slideImg">
            <Image src="/assets/images/host-4.png" width={285} height={285} />
          </div>
          <div className="slideInfo">
            <div className="subDetail">
              <h3>Jane A</h3>
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
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
          <Link href="#" className="allBtn border">
            Message customer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleCustomerDetail;

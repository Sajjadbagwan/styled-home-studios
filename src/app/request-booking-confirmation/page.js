import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./requestBookingConfirmation.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import RequestBookingSlider from "@/components/Design/RequestBookingSlider/requestBookingSlider";
import BookingOrderSummary from "@/components/Design/BookingOrderSummary/bookingOrderSummary";
import SingleHostDetail from "@/components/Design/SingleHostDetail/singleHostDetail";

function Layout({ children }) {
  return (
    <div className={styles.requestBookingConfirmation}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <div className="mainBooking">
        <div className="container">
          <Link href="#" className="backBtn">
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
            Back Bright and Light Townhouse – N1
          </Link>
          <div className="row">
            <div className="leftBooking">
              <RequestBookingSlider />
              <p>
                Shoot location with a pared back aesthetic, clean lines and
                neutral tones
              </p>
              <SingleHostDetail />
            </div>
            <div className="rightBooking">
              <h3>What Happens Next?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <BookingOrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

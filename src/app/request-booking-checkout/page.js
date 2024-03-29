import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./requestBookingCheckout.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import RequestBookingSlider from "@/components/Design/RequestBookingSlider/requestBookingSlider";
import BookingOrderSummary from "@/components/Design/BookingOrderSummary/bookingOrderSummary";
import BookingOrderForm from "@/components/Design/BookingOrderForm/bookingOrderForm";

function Layout({ children }) {
  return (
    <div className={styles.requestBookingCheckout}>
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
              <BookingOrderSummary />
            </div>
            <div className="rightBooking">
              <BookingOrderForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

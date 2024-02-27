import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./requestBookingCheckout.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import RequestBookingSlider from "@/components/Design/RequestBookingSlider/requestBookingSlider";
import BookingOrderSummary from "@/components/Design/BookingOrderSummary/bookingOrderSummary";

function Layout({ children }) {
  return (
    <div className={styles.requestBookingCheckout}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <div className="mainBooking">
        <div className="container">
          <div className="row">
            <div className="leftBooking">
              <RequestBookingSlider />
              <BookingOrderSummary />
            </div>
            <div className="rightBooking"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;

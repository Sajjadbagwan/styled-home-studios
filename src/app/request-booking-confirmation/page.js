import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./requestBookingConfirmation.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import RequestBookingSlider from "@/components/Design/RequestBookingSlider/requestBookingSlider";
import BookingOrderSummary from "@/components/Design/BookingOrderSummary/bookingOrderSummary";
import SingleHostDetail from "@/components/Design/SingleHostDetail/singleHostDetail";
import BookingDetailBox from "@/components/Design/BookingDetailBox/bookingDetailBox";
import LocationDirectory from "@/components/Design/LocationDirectory/locationDirectory";
import TrendingLocations from "@/components/Design/TrendingLocations/trendingLocations";

function Layout({ children }) {
  return (
    <div className={styles.requestBookingConfirmation}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <div className="mainBooking">
        <div className="container">
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
              <div className="bookTxt">
                <h2>What Happens Next?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <BookingOrderSummary />
              <BookingDetailBox />
            </div>
          </div>
        </div>
      </div>
      <LocationDirectory />
      <TrendingLocations />
    </div>
  );
}

export default Layout;

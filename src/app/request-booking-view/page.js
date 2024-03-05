import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./requestBookingView.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import BookingOrderSummary from "@/components/Design/BookingOrderSummary/bookingOrderSummary";
import SingleHostDetail from "@/components/Design/SingleHostDetail/singleHostDetail";
import BookingDetailBox from "@/components/Design/BookingDetailBox/bookingDetailBox";
import LocationDirectory from "@/components/Design/LocationDirectory/locationDirectory";
import TrendingLocations from "@/components/Design/TrendingLocations/trendingLocations";
import BookingViewInfo from "@/components/Design/BookingViewInfo/bookingViewInfo";

function Layout({ children }) {
  return (
    <div className={styles.requestBookingView}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <BookingViewInfo />
      <div className="mainBooking">
        <div className="container">
          <div className="row">
            <div className="leftBooking">
              <SingleHostDetail />
            </div>
            <div className="rightBooking">
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

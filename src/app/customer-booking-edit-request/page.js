import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./customerBookingEditRequest.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import SingleHostDetail from "@/components/Design/SingleHostDetail/singleHostDetail";
import LocationDirectory from "@/components/Design/LocationDirectory/locationDirectory";
import TrendingLocations from "@/components/Design/TrendingLocations/trendingLocations";
import BookingViewInfo from "@/components/Design/BookingViewInfo/bookingViewInfo";
import CustomerBookingEditForm from "@/components/Design/CustomerBookingEditForm/customerBookingEditForm";

function Layout({ children }) {
  return (
    <div className={styles.customerBookingEditRequest}>
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
              <CustomerBookingEditForm />
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

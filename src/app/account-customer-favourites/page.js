import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./accountCustomerFavourites.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import TrendingLocations from "@/components/Design/TrendingLocations/trendingLocations";
import AboutLeftImg from "@/components/Design/AboutLeftImg/aboutLeftImg";
import LatestNews from "@/components/Design/LatestNews/latestNews";
import FavouritesGroupSubList from "@/components/Design/FavouritesGroupSubList/favouritesGroupSubList";

function Layout({ children }) {
  return (
    <div className={styles.accountCustomerFavourites}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <FavouritesGroupSubList />
      <AboutLeftImg />
      <LatestNews />
    </div>
  );
}

export default Layout;

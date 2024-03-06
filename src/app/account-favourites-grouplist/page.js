import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./accountFavouritesGroupList.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import TrendingLocations from "@/components/Design/TrendingLocations/trendingLocations";
import AboutLeftImg from "@/components/Design/AboutLeftImg/aboutLeftImg";
import LatestNews from "@/components/Design/LatestNews/latestNews";
import FavouritesGroupList from "@/components/Design/FavouritesGroupList/favouritesGroupList";

function Layout({ children }) {
  return (
    <div className={styles.accountFavouritesGroupList}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <FavouritesGroupList />
      <TrendingLocations />
      <AboutLeftImg />
      <LatestNews />
    </div>
  );
}

export default Layout;

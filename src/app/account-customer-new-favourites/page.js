import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./accountCustomerNewFavourites.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import AboutLeftImg from "@/components/Design/AboutLeftImg/aboutLeftImg";
import LatestNews from "@/components/Design/LatestNews/latestNews";
import FavouritesNewGroup from "@/components/Design/FavouritesNewGroup/favouritesNewGroup";

function Layout({ children }) {
  return (
    <div className={styles.accountCustomerNewFavourites}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <FavouritesNewGroup />
      <AboutLeftImg />
      <LatestNews />
    </div>
  );
}

export default Layout;

"use client";
import React from "react";
import HomeHero from "@/components/Design/HomeHero/homeHero";
import styles from "./directoryHome.module.scss";
import JoinOurDirectory from "@/components/Design/DirectoryHome/joinOurDirectory";
import PopularLocations from "@/components/Design/PopularLocations/popularLocations";
import TopHost from "@/components/Design/TopHost/topHost";
import FaqTopArticle from "@/components/Design/Help/faqTopArticle";

export default function DirectoryHome() {  

  return (
    <>
        <div className={styles.directoryHomepage}>
            <HomeHero />
            <PopularLocations />
            <TopHost />
            <JoinOurDirectory />
            <FaqTopArticle />
        </div>      
    </>
  );
}

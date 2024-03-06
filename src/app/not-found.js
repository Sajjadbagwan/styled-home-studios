"use client";
import React, { useState } from "react";
import Link from 'next/link'
import styles from "./pageNotFound.module.scss";
import HomeHero from "@/components/Design/HomeHero/homeHero";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFoundPage}>   
      <HomeHero />
      <AboutRightImg />
    </div>      
        
  );
};

export default PageNotFound;
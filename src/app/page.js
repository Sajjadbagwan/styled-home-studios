"use client";
import React, { useEffect } from "react";
import HomeHero from "@/components/Design/HomeHero/homeHero";
import TrendingLocations from "@/components/Design/TrendingLocations/trendingLocations";
import LovedBy from "@/components/Design/LovedBy/lovedBy";
import HowDoesItWork from "@/components/Design/HowDoesItWork/howDoesItWork";
import BrowseByStyle from "@/components/Design/BrowseByStyle/browseByStyle";
import OurTopPick from "@/components/Design/OurTopPick/ourTopPick";
import CallToAction from "@/components/Design/CallToAction/callToAction";
import PopularLocations from "@/components/Design/PopularLocations/popularLocations";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import BrowseByColour from "@/components/Design/BrowseByColour/browseByColour";
import TopHost from "@/components/Design/TopHost/topHost";
import AboutLeftImg from "@/components/Design/AboutLeftImg/aboutLeftImg";
import LatestNews from "@/components/Design/LatestNews/latestNews";
import SignUpForm from "@/components/Design/SignUpForm/signUpForm";
import BottomBoxes from "@/components/Design/BottomBoxes/bottomBoxes";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("homePage");
    return () => document.body.classList.remove("homePage");
  }, []);

  return (
    <>
      <HomeHero />
      <TrendingLocations />
      <LovedBy />
      <HowDoesItWork />
      <BrowseByStyle />
      <OurTopPick />
      <CallToAction />
      <PopularLocations />
      <AboutRightImg />
      <BrowseByColour />
      <TopHost />
      <CallToAction />
      <AboutLeftImg />
      <LatestNews />
      <SignUpForm />
      <BottomBoxes />
    </>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blogDetails.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import BlogDetailSection from "@/components/Design/BlogDetails/blogDetailSection";
import SignUpForm from "@/components/Design/SignUpForm/signUpForm";
import OurTopPick from "@/components/Design/OurTopPick/ourTopPick";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";
import BlogDetailBottomSection from "@/components/Design/BlogDetails/blogDetailBottomSection";

export default function BlogDetails() {
  return (
    <div className={styles.blogDetailsPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <BlogDetailSection />
      <OurTopPick />
      <BlogDetailBottomSection />
      <SignUpForm />
      <AboutRightImg />
    </div>
  );
}


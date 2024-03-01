import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blogListing.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import PropertyFilterTab from "@/components/Design/PropertyFilterTab/propertyFilterTab";
import BlogListingSection from "@/components/Design/BlogListing/blogListingSection";
import SignUpForm from "@/components/Design/SignUpForm/signUpForm";
import AboutRightImg from "@/components/Design/AboutRightImg/aboutRightImg";

export default function BlogListing() {
  return (
    <div className={styles.blogListingPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <PropertyFilterTab />
      <BlogListingSection />
      <SignUpForm />
      <AboutRightImg />
    </div>
  );
}


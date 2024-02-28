import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./leaveReview.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import LeaveAreviewSection from "@/components/Design/LeaveReview/leaveAreviewSection";

export default function LeaveAreview() {
  return (
    <div className={styles.leaveAreviewPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <LeaveAreviewSection />
    </div>
  );
}


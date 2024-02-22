import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./confirmPropertyDetails.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import ConfirmPropertyDetailsForm from "@/components/Design/ConfirmPropertyDetailsForm/confirmPropertyDetailsForm";

export default function ConfirmPropertyDetails() {
  return (
    <div className={styles.confirmPropertyDetailsPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <ConfirmPropertyDetailsForm />
    </div>
  );
}


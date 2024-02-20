import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./becomeHost.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import BecomeAhostForm from "@/components/Design/BecomeAhostForm/becomeAhostForm";

export default function BecomeAhost() {
  return (
    <div className={styles.becomeAhostPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <BecomeAhostForm />
    </div>
  );
}


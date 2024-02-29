import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./accountHostProfileEdit.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import AccountHostProfileEditSection from "@/components/Design/AccountHostAccountSection/accountHostProfileEdit";

export default function AccountHostProfileEditPage() {
  return (
    <div className={styles.accountHostProfileEditPage}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <AccountHostProfileEditSection />
    </div>
  );
}


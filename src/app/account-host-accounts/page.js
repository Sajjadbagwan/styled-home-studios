import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./accountHostAccounts.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import AccountHostAccountSection from "@/components/Design/AccountHostAccountSection/accountHostAccountSection";

export default function AccountHostAccounts() {
  return (
    <div className={styles.accountHostAccountsPage}>
      <TitleWithTextBanner /> 
      <Breadcrumb />
      <AccountHostAccountSection />
    </div>
  );
}


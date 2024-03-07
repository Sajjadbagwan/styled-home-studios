import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./accountCustomerYourProfile.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import AccountCustomerProfileForm from "@/components/Design/AccountCustomerProfileForm/accountCustomerProfileForm";

function Layout({ children }) {
  return (
    <div className={styles.accountCustomerYourProfile}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <AccountCustomerProfileForm />
    </div>
  );
}
export default Layout;

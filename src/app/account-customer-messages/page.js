import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./accountCustomerMessages.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import CustomerMessagesBox from "@/components/Design/CustomerMessagesBox/customerMessagesBox";

function Layout({ children }) {
  return (
    <div className={styles.accountCustomerMessages}>
      <Breadcrumb />
      <CustomerMessagesBox />
    </div>
  );
}

export default Layout;

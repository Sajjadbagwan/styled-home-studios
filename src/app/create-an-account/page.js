import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./createAnAccount.module.scss";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import CreateAccountForm from "@/components/Design/CreateAccountForm/createAccountForm";

function Layout({ children }) {
  return (
    <div className={styles.createAnAccount}>
      <TitleWithTextBanner />
      <Breadcrumb />
      <CreateAccountForm />
    </div>
  );
}

export default Layout;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./legalPage.module.scss";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import LegalBanner from "@/components/Design/LegalBanner/legalBanner";
import LegalContentSection from "@/components/Design/LegalContent/leganContent";


export default function LegalPage() {
  return (
    <div className={styles.legalPage}>
      <LegalBanner />
      <Breadcrumb />  
      <LegalContentSection />    
    </div>
  );
}


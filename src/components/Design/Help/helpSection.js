"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../../../../public/assets/images/down-arrow.svg"
import FaqContent from "@/components/Design/Help/faqContent";
import FilterBy from "@/components/Design/FilterBy/filterBy";
import styles from "./helpSection.module.scss";

function HelpSection() {
    const [open, setOpen] = useState(0); 
  return (
    <div className={styles.helpSection}>
      <div className="container">
            <FilterBy />
            <div className="filterContent">
                <FaqContent />
            </div>
      </div>
    </div>
  );
}

export default HelpSection;

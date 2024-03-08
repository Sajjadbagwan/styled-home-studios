"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TitleWithTextBanner from "@/components/Design/TitleWithTextBanner/titleWithTextBanner";
import Breadcrumb from "@/components/Design/Breadcrumb/breadcrumb";
import JoinTheDirectorySection from "@/components/Design/JoinDirectorySection/joinDirectorySection";
import styles from "./joinDirectory.module.scss";

export default function JoinDirectory() {
    return (
      <div className={styles.joinDirectoryPage}>
        <TitleWithTextBanner />
        <Breadcrumb />
        <JoinTheDirectorySection />
      </div>
    );
  }

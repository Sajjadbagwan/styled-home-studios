"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./breadcrumb.module.scss";

function Breadcrumb() {
  return (
    <section className={styles.breadcrumb}>
      <div className="container">
        <div className="row">
          <p>
            <Link href="#">Breadcrumbs</Link>/<Link href="#">Breadcrumbs</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;

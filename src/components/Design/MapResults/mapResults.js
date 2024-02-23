"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./mapResults.module.scss";

function MapResults() {
  return (
    <>
      <section className={styles.mainMap}>
        <div className="innerMap">
          <Image
            src="/assets/images/map.png"
            width={1943}
            height={721}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default MapResults;

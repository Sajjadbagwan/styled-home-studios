"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./lovedBy.module.scss";

function LovedBy() {
  return (
    <section className={styles.lovedBy}>
      <div className="container">
        <div className="row">
          <div className="title">
            <h2>Loved By</h2>
          </div>
          <div className="logos">
            <div className="logoList">
              <Image
                src="/assets/images/logo-1.png"
                width={180}
                height={78}
                alt=""
              />
              <Image
                src="/assets/images/logo-2.png"
                width={165}
                height={80}
                alt=""
              />
              <Image
                src="/assets/images/logo-3.png"
                width={125}
                height={125}
                alt=""
              />
              <Image
                src="/assets/images/logo-4.png"
                width={62}
                height={83}
                alt=""
              />
              <Image
                src="/assets/images/logo-1.png"
                width={180}
                height={78}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LovedBy;

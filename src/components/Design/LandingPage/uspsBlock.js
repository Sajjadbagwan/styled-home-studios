"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PatternIcon from "../../../../public/assets/images/shape-svg-white.svg"
import styles from "./uspsBlock.module.scss";

function UspsBlock() {
    return (
    <section className={styles.uspsBlock}>
      <div className="container">
        <div className="row">
            <div className="column3">
                <div className="circleDiv">
                    <Image src={PatternIcon} alt="pattern" height={35} width={30} />
                </div>
                <h5>USP 1 Lorem Ipsum</h5>
            </div>
            <div className="column3">
                <div className="circleDiv">
                    <Image src={PatternIcon} alt="pattern" height={35} width={30} />
                </div>
                <h5>USP 2 Lorem Ipsum</h5>
            </div>
            <div className="column3">
                <div className="circleDiv">
                    <Image src={PatternIcon} alt="pattern" height={35} width={30} />
                </div>
                <h5>USP 3 Lorem Ipsum</h5>
            </div>
        </div>
      </div>
    </section>
  );
}

export default UspsBlock;

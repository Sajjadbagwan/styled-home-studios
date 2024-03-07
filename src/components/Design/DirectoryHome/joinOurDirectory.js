"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Directory1 from "../../../../public/assets/images/directory1.png"
import Directory2 from "../../../../public/assets/images/directory2.png"
import styles from "./joinOurDirectory.module.scss";

function JoinOurDirectory() {
  return (
    <section className={styles.joinOurDirectory + " joinOurDirectory"}>
      <div className="container">
        <div className="row">
          <div className="aboutInfo">
            <div className="titleDouble line">
              <span>The Benefits</span>
              <h2>Joining Our Directory</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia.
            </p>
            <Link href="#" className="allBtn dark border">
                Join the directory
            </Link>
          </div>
          <div className="payCharge">
            <div className="topImage">
                <Image src={Directory1} alt="directory" height={260} width={240} />
            </div>            
            <div className="payPer">
                <h3>Pay Monthly</h3>
                <h3>£30</h3>
            </div>
            <hr/>
            <div className="payPer">                
                <h3>Pay Yearly</h3>
                <div className="yearly">
                    <h3>£270</h3>
                    <span>Save 10%</span>
                </div>                
            </div>
            <div className="bottomImage">
                <Image src={Directory2} alt="directory2" height={260} width={240} />
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinOurDirectory;

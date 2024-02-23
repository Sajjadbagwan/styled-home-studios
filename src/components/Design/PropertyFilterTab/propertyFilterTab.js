"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThankyouIcon from "../../../../public/assets/images/thankyou-property.svg";
import styles from "./propertyFilterTab.module.scss";

function PropertyFilterTab() {
  return (
    <div className={styles.propertyFilterTab}>
      <div className="container">
        <div className="titleText">
            <h3>Filter Your Properties:</h3>    
            <ul className="filter-tab">
              <li><Link className="active" href="">Active</Link></li>
              <li><Link href="">Awaiting Approval</Link></li>
              <li><Link href="">Incomplete</Link></li>
              <li><Link href="">Declined</Link></li>
              <li><Link href="">Inactive</Link></li>
            </ul>  
        </div>        
      </div>
    </div>
  );
}

export default PropertyFilterTab;

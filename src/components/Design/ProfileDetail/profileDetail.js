"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./profileDetail.module.scss";
import SingleCustomerDetail from "../SingleCustomerDetail/singleCustomerDetail";
import CustomerProfileReview from "../CustomerProfileReview/customerProfileReview";

function ProfileDetail() {
  return (
    <section className={styles.profileDetail}>
      <div className="container">
        <div className="row">
          <div className="hostLeft">
            <SingleCustomerDetail />
          </div>
          <div className="hostRight">
            <CustomerProfileReview />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileDetail;

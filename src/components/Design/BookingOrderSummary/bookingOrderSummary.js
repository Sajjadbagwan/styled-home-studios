"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./bookingOrderSummary.module.scss";

function BookingOrderSummary() {
  return (
    <div className={styles.bookingOrderSummary}>
      <div>
        <div className="title">
          <h2>Order Summary</h2>
          <Link href="#">
            <Image
              src="/assets/images/edit.svg"
              alt="host"
              width={10}
              height={17}
            />
            Edit Details
          </Link>
        </div>
        <div className="subDetail">
          <span>Day 1</span>
          <div>
            <span>28/06/24</span>
            <span>15:00 - 17:00</span>
          </div>
        </div>
        <div className="subDetail">
          <span>Day 2</span>
          <div>
            <span>28/06/24</span>
            <span>15:00 - 17:00</span>
          </div>
        </div>
        <hr />
        <div className="subDetail">
          <span>Total:</span>
          <div>
            <span>£1045.00</span>
            <span className="normal">(5 hours)</span>
          </div>
        </div>
        <div className="subDetail">
          <span>Service Charge</span>
          <div>
            <span>£83.60</span>
            <span className="normal">(8%)</span>
          </div>
        </div>
        <div className="subDetail">
          <span>VAT</span>
          <div>
            <span>£16.72</span>
          </div>
        </div>
        <div className="subDetail">
          <span>Voucher Code</span>
          <div>
            <span>-£104.50</span>
            <div>
              <span className="link">Remove</span>
              <span className="normal">(10JN)</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="subDetail total">
          <span>Grand Total</span>
          <div>
            <span>£1040.82</span>
            <span>(5 hours)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingOrderSummary;

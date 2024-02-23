"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./locationInfo.module.scss";

function LocationInfo() {
  return (
    <section className={styles.locationInfo}>
      <div className="container">
        <div className="row">
          <div className="aboutinfo">
            <div class="titleDouble line">
              <span>About</span>
              <h2>Bright And Light Townhouse – N1</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex <Link href="#">Read More</Link>
            </p>
          </div>
          <div className="aboutForm">
            <div>
              <form>
                <h2>£215 Per Hour</h2>
                <p>1 hour minimum booking</p>
                <p>Full day discount 10% off</p>
                <h3>Date & Time</h3>
                <div className="dateFiled">
                  <input type="date"></input>
                </div>
                <div className="timeFiled">
                  <input type="text" placeholder="Start Time"></input>
                  <input type="text" placeholder="End Time"></input>
                </div>
                <Link href="#" className="dayAdd">
                  + Add A Day
                </Link>
                <div className="costBox">
                  <div>
                    <h4>Total Cost</h4>
                    <span>(Including 8% service charge)</span>
                  </div>
                  <h4>£215.00</h4>
                </div>
                <button type="submit" className="allBtn dark border">
                  Book Now
                </button>
                <div className="askForm">
                  <Link href="#">Message The Host / Ask A Question</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationInfo;

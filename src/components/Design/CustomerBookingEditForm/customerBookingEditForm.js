"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./customerBookingEditForm.module.scss";

function CustomerBookingEditForm() {
  return (
    <div className={styles.customerBookingEditForm}>
      <div className="bookingInfo">
        <form>
          <h4>£215 Per Hour</h4>
          <p>1 hour minimum booking</p>
          <p className="spaceTxt">Full day discount 10% off</p>
          <h6>Date & Time</h6>
          <div className="addTime">
            <div className="dateFiled">
              <input type="date"></input>
            </div>
            <div className="timeFiled">
              <input type="text" placeholder="Start Time"></input>
              <input type="text" placeholder="End Time"></input>
            </div>
            <Link href="#" className="dayRemoved">
              Remove Day
            </Link>
          </div>
          <div className="addTime">
            <div className="dateFiled">
              <input type="date"></input>
            </div>
            <div className="timeFiled">
              <input type="text" placeholder="Start Time"></input>
              <input type="text" placeholder="End Time"></input>
            </div>
            <Link href="#" className="dayRemoved">
              Remove Day
            </Link>
          </div>
          <Link href="#" className="dayAdd">
            + Add A Day
          </Link>
          <div className="costBox">
            <div>
              <h6>Total Cost</h6>
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
        <div className="editInfo">
          <div className="infoList">
            <div className="list">
              <span>Crew</span>
              <span>4 People</span>
            </div>
          </div>
          <h6>Message</h6>
          <p>
            Hi, love the property, is there anywhere suitable for us to stay in
            the surrounding area that you can recommend?
          </p>
          <div className="infoBtns">
            <Link href="#" className="allBtn border">
              Message Host
            </Link>
            <Link href="#" className="link">
              Cancel Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerBookingEditForm;

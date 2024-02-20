"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BackArrow from "../../../../public/assets/images/back-arrow.svg"
import styles from "./becomeAhostForm.module.scss";

function BecomeAhostForm() {
  return (
    <section className={styles.BecomeAhostForm}>
      <div className="container">
        <div className="formDiv">
          <Link className="backbtn" href=""> <Image src={BackArrow} alt="backarrow" height={14} width={9}></Image> Back To Become A Host </Link>
          <div className="formDetails">
            <h2>Please Enter Details Below</h2>
            <p>We personally check all venue information. We are now going to ask you to submit some brief details which if approved<br/> we will then require the full property details</p>
            <form>
              <div className="inputGroup">
                <div className="halfInput">
                  <input type="text" name="property-name" placeholder="Property Name*" />
                </div>
                <div className="halfInput">
                  <input type="text" name="property-pcode" placeholder="Property Postcode*" />
                </div>
              </div>
              <div className="inputGroup">
                <textarea name="desc" placeholder="Property Description (Please describe your property in as much detail as possible)"></textarea>
              </div>
              <hr/>
              <div className="imageSection">
                <h2>Images*</h2>
                <p>(Please drag them into the order you sit to use. The First will be the featured image.)</p>
                <p>Minimum of 5 images, please.</p>
              </div>
              <hr/>
              <div className="aboutYou">
                  <h2>About You</h2>
                  <div className="inputGroup">
                    <div className="halfInput">
                      <input type="text" name="iusername" placeholder="Instagram Username" />
                    </div>
                    <div className="halfInput"></div>
                  </div>
                  <div className="inputGroup">
                    <textarea name="bio" placeholder="Your Bio"></textarea>
                  </div>
                  <hr />
              </div>
              <button type="button" className="allBtn dark">Submit for approval</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecomeAhostForm;

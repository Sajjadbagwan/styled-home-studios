"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./joinDirectorySection.module.scss";

function YourServiceDetails() {
  
  return (
    <div className={styles.yourServiceDetails + " yourServiceDetails"}>
        <div className="formDetails">
            <h2>Please Enter Your Details About Your Services</h2>
            <p>Please give us the details of your service that will be reviewed by our team.</p>
            <form>
                <div className="inputGroup">
                    <input type="text" name="service" placeholder="Service* (e.g. makeup, styling, photography)*" />         
                </div>
                <div className="inputGroup">
                    <input type="text" name="ywebsite" placeholder="Your website or portfolio link*" />
                </div>
                <div className="inputGroup">
                    <input type="text" name="ysocial" placeholder="Your best social media" />
                </div>
                <hr/>
                <div className="buttonContainer">
                    <Link href="" className="save-come">Save Progress and Come Back Later</Link>
                    <button aria-label="next-btn" type="button" className="allBtn dark">Next</button>
                </div>     
            </form>
            
        </div>
    </div>
  );
}

export default YourServiceDetails;

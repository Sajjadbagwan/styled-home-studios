"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Rating } from 'react-simple-star-rating'
import BackArrow from "../../../../public/assets/images/back-arrow.svg"
import styles from "./leaveAreviewSection.module.scss";

function LeaveAreviewSection() {
    const [rating, setRating] = useState(0) 
    const handleRating = () => {
      setRating(rate)
    }
  return (
    <section className={styles.leaveAreviewSectionForm}>
      <div className="container">
        <div className="formDiv">
          <Link className="backbtn" href=""> <Image src={BackArrow} alt="backarrow" height={14} width={9}></Image> Back To Account Home </Link>
          <div className="leaveReview">
            <div className="popup-body removeCompare-body">
                <h3>Thanks For Renting Bright And Light Townhouse - N1, Now It’s Time To Leave A Review For Your Customer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                <hr/>
                <h4>Your Review</h4>
                <h5>Overall Experience</h5>
                <Rating
                    initialValue={rating}
                    allowFraction={true}
                    size={36}
                    emptyColor="#fff"
                    fillColor="#20535a"
                    SVGstorkeWidth="1"
                    SVGstrokeColor="#20535a"  
                    className="ratingStartIcon"
                />
                <span className="rating">4.5</span>
                <form>
                    <div className="inputGroup">
                    <textarea placeholder="Add your review*" name="reason"></textarea>
                    </div>
                </form>
                <div className="button-container">
                    <button type="button" className="allBtn dark border">Submit</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeaveAreviewSection;

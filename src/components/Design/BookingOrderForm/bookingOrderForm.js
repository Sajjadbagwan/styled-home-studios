"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CardIcon from "../../../../public/assets/images/card.svg"
import styles from "./bookingOrderForm.module.scss";

function BookingOrderForm() {
  return (
    <div className={styles.bookingOrderForm}>
      <div className="bookingForm">
        <form>
          <div className="bookingBox">
            <h3>Fill Out The Details Below To Request Your Booking</h3>
            <div className="inputGroup">
              <label>How many people will be working on site with you?</label>
              <input type="text" name="people" />
            </div>
            <div className="inputGroup">
              <label>
                Message to host (please give a brief description of what you
                have planned)*
              </label>
              <textarea name="hostmsg" />
            </div>
          </div>
          <div className="bookingBox">
            <h3>Payment Details</h3>
            <div className="formNote">
              <svg
                id="Group_4421"
                data-name="Group 4421"
                xmlns="http://www.w3.org/2000/svg"
                width="41.18"
                height="41.18"
                viewBox="0 0 41.18 41.18"
              >
                <g
                  id="Group_4420"
                  data-name="Group 4420"
                  transform="translate(11.543 11.019)"
                >
                  <g
                    id="Group_4419"
                    data-name="Group 4419"
                    transform="translate(0 16.795) rotate(-90)"
                  >
                    <path
                      id="Path_613"
                      data-name="Path 613"
                      d="M9.228,0l9.39,6.727V16.795H0V6.727Z"
                      transform="translate(16.795) rotate(90)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="1.2"
                    />
                  </g>
                  <text
                    id="_"
                    data-name="?"
                    transform="translate(7.328 13.51)"
                    fill="#fff"
                    font-size="12"
                    font-family="Baskervville-Regular, Baskervville"
                  >
                    <tspan x="0" y="0">
                      ?
                    </tspan>
                  </text>
                </g>
                <g
                  id="Ellipse_24"
                  data-name="Ellipse 24"
                  transform="translate(0 0)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.2"
                >
                  <circle cx="20.59" cy="20.59" r="20.59" stroke="none" />
                  <circle cx="20.59" cy="20.59" r="19.99" fill="none" />
                </g>
              </svg>
              <h4>
                Your Card Will Not Be Debited Until The Booking Is Confirmed By
                The Host.
              </h4>
            </div>
            <h4>Billing Address</h4>
            <div className="inputGroup">
              <input
                type="text"
                name=""
                placeholder="Start typing your address…"
              />
            </div>
            <div className="inputGroup">
              <input type="text" name="" placeholder="House Name/ Number*" />
            </div>
            <div className="inputGroup">
              <input type="text" name="" placeholder="Address Line 2" />
            </div>
            <div className="inputGroup">
              <input type="text" name="" placeholder="Address Line 3" />
            </div>
            <div className="inputGroup">
              <input type="text" name="" placeholder="Town/City*" />
            </div>
            <div className="inputGroup">
              <input type="text" name="" placeholder="Postcode*" />
            </div>
            <hr />
            <h4>Voucher Code</h4>
            <div className="codeBox">
              <div className="inputGroup">
                <input type="text" name="" placeholder="Voucher Code" />
              </div>
              <div className="inputGroup">
                <button
                  className="allBtn dark border"
                  type="submit"
                  value="apply" 
                  aria-label="apply"
                >
                  Apply
                </button>
              </div>
            </div>
            <hr />
            <h4>Payment Information <Image src={CardIcon} height={30} width={140} alt="card" /></h4>
            <div className="inputGroup">
              <input type="text" name="" placeholder="Card Name*" />
            </div>
            <div className="inputGroup">
              <input type="text" name="" placeholder="Card Number*" />
            </div>
            <div className="paymentBox">
              <div>
                <div className="inputGroup">
                  <input type="text" name="" placeholder="Expiry Month*" />
                </div>
                <div className="inputGroup">
                  <input type="text" name="" placeholder="Expiry Year*" />
                </div>
              </div>
              <div>
                <div className="inputGroup">
                  <input type="text" name="" placeholder="CV2*" />
                </div>
              </div>
            </div>
            <hr />
            <div className="singleCheckbox">
              <input type="checkbox" id="18" value="18" />
              <label className="form-control" for="18">
                I agree to the <Link href="#">Terms & Conditions</Link>
              </label>
            </div>
            <hr />
            <div className="inputGroup bookBtn">
              <button aria-label="request" className="allBtn dark border" type="submit">
                Request a booking
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingOrderForm;

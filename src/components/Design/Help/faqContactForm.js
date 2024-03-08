"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EmailIcon from "../../../../public/assets/images/email.svg";
import PinterestIcon from "../../../../public/assets/images/pinterest.svg";
import InstagramIcon from "../../../../public/assets/images/instagram.svg";
import styles from "./faqContactForm.module.scss";

function FaqContactForm() {
  return (
    <div className={styles.faqContactFormSection}>
      <div className="container">
        <div className="contactForm">
          <div>
            <h3>Contact Us By Filling Out The Form Below</h3>
            <form action="#">
              <div className="halfInput">
                <div className="inputGroup">
                  <input type="text" name="fname" placeholder="First Name" />
                </div>
                <div className="inputGroup">
                  <input type="text" name="sname" placeholder="Surname" />
                </div>
              </div>
              <div className="halfInput">
                <div className="inputGroup">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="inputGroup">
                  <input type="text" name="phone" placeholder="Phone Number" />
                </div>
              </div>
              <div className="inputGroup">
                <textarea placeholder="Message" name="message"></textarea>
              </div>
              <div className="rightAlign">
                <div className="singleCheckbox">
                  <input id="signup" type="checkbox" value="signup" />
                  <label className="form-control" for="signup">
                    I consent to email marketing
                  </label>
                </div>
                <input
                  type="submit"
                  className="allBtn dark border"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          <hr />
          <div className="contactUsBy">
            <h3>Or Contact Us By…</h3>
            <ul>
              <li>
                <Link href="mailto:hello@styledhomestudios.co.uk">
                  <Image src={EmailIcon} alt="email" height={38} width={38} />
                  hello@styledhomestudios.co.uk
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src={PinterestIcon}
                    alt="pinterest"
                    height={38}
                    width={38}
                  />
                  @homestyledstudios
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src={InstagramIcon}
                    alt="instagram"
                    height={38}
                    width={38}
                  />
                  @homestyledstudios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqContactForm;

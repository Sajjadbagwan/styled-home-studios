"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EmailIcon from "../../../../public/assets/images/color-email.svg"
import PinterestIcon from "../../../../public/assets/images/color-pinterest.svg"
import CallIcon from "../../../../public/assets/images/color-call.svg"
import InstagramIcon from "../../../../public/assets/images/color-instagram.svg"
import WebIcon from "../../../../public/assets/images/color-web.svg"
import styles from "./aboutArtist.module.scss";

function AboutArtist() {
  return (
    <div className={styles.aboutArtistSection}>
      <div className="container">
        <div className="hostSlider">
          <div className="slide">
            <div className="hostLeft">
              <div className="slideImg">
                <Image
                  src="/assets/images/team2.jpg"
                  alt="host"
                  width={285}
                  height={285}
                />
              </div>
            </div>
            <div className="hostRight">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <Link href="#" className="allBtn dark border">
              Contact Creative
              </Link>
            </div>
          </div>
          <div className="socialInfo">
            <ul>
                <li>
                    <Link href="mailto:Info@johnjames.co.uk">
                        <Image src={EmailIcon} alt="email" height={30} width={30} />
                        <span>Info@johnjames.co.uk</span>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Image src={PinterestIcon} alt="pinterest" height={30} width={30} />
                        <span>johnjamesbeauty</span>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Image src={CallIcon} alt="call" height={30} width={30} />
                        <span>07123 456 7890</span>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <Image src={InstagramIcon} alt="instagram" height={30} width={30} />
                        <span>@johnjamesbeauty</span>
                    </Link>
                </li>
                <li>
                    <Link href="" target="_blank">
                        <Image src={WebIcon} alt="web" height={30} width={30} />
                        <span>johnjamesbeauty.com</span>
                    </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutArtist;

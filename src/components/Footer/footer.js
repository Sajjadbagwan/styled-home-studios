"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <>
      <section className={styles.mainFooter}>
        <div className="container">
          <div className="row">
            <div className="footerBox">
              <Link href="#">
                <Image
                  src="/assets/images/footer-logo.png"
                  width={308}
                  height={124}
                  sizes="100vw"
                  alt=""
                  className="footerLogo"
                />
              </Link>
            </div>
            <div className="footerBox">
              <h3>Helpful Links</h3>
              <ul>
                <li>
                  <Link href="#">Rent Property</Link>
                </li>
                <li>
                  <Link href="#">Become A Host</Link>
                </li>
                <li>
                  <Link href="#">Book A Creative</Link>
                </li>
                <li>
                  <Link href="#">Join The Directory</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Journals</Link>
                </li>
              </ul>
              <div className="socialFooter">
                <ul>
                  <li>
                    <Link href="#">
                      <Image
                        src="/assets/images/pin.png"
                        width={46}
                        height={46}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        src="/assets/images/insta.png"
                        width={46}
                        height={46}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerBox">
              <h3>Customer Care</h3>
              <ul>
                <li>
                  <Link href="#">Help</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Legal</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
              </ul>
            </div>
            <div className="footerBox">
              <h3>Subscribe To Our Newsletter</h3>
              <form>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <div className="selectMain">
                  <select name="Interested in" id="Interested in">
                    <option value="Interested in">Interested in</option>
                    <option value="Interested in">Interested in</option>
                    <option value="Interested in">Interested in</option>
                    <option value="Interested in">Interested in</option>
                    <option value="Interested in">Interested in</option>
                  </select>
                </div>
                <div className="checkMain">
                  <label for="consent1">
                    I consent to email marketing
                    <input
                      type="checkbox"
                      id="consent1"
                      name="consent1"
                      value="consent1"
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <input type="submit" className="allBtn dark" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.copyright}>
        <div className="container">
          <div className="row">
            <div className="copyInfo"></div>
            <div className="copyInfo">
              <ul>
                <li>
                  <Link href="#">
                    <Image
                      src="/assets/images/icon-1.png"
                      width={28}
                      height={20}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/assets/images/icon-2.png"
                      width={28}
                      height={20}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/assets/images/icon-3.png"
                      width={28}
                      height={20}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/assets/images/icon-4.png"
                      width={28}
                      height={20}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/assets/images/icon-5.png"
                      width={28}
                      height={20}
                      alt=""
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image
                      src="/assets/images/icon-6.png"
                      width={28}
                      height={20}
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="copyInfo">
              <p>© Styled Home Studios 2023</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

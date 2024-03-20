"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import Select from "react-select";

function Footer() {
  const [isFooterMenu, setIsFooterMenu] = useState(false);
  const handleFooterMenuClick = () => {
    setIsFooterMenu(!isFooterMenu);
  };

  const [isFooterMenuone, setIsFooterMenuone] = useState(false);
  const handleFooterMenuoneClick = () => {
    setIsFooterMenuone(!isFooterMenuone);
  };

  const optionstitle = [
    { value: "Interested in", label: "Interested in" },
    { value: "Interested in", label: "Interested in" },
  ];

  return (
    <>
      <section className={styles.mainFooter}>
        <div className="container">
          <div className="row">
            <div className="footerBox">
              <Link href="/">
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
              <h3 onClick={handleFooterMenuClick}>
                Helpful Links
                <span> {isFooterMenu ? "-" : "+"}</span>
              </h3>
              <ul className={isFooterMenu ? "show" : ""}>
                <li>
                  <Link href="/confirm-property-details/">Rent Property</Link>
                </li>
                <li>
                  <Link href="/become-a-host/">Become A Host</Link>
                </li>
                <li>
                  <Link href="/directory-listing/">Book A Creative</Link>
                </li>
                <li>
                  <Link href="/directory-home/">Join The Directory</Link>
                </li>
                <li>
                  <Link href="/about-us/">About Us</Link>
                </li>
                <li>
                  <Link href="/blog-listing/">Journals</Link>
                </li>
              </ul>
              <div className="socialFooter desktop">
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
              <h3 onClick={handleFooterMenuoneClick}>
                Customer Care
                <span>
                  {isFooterMenuone ? "-" : "+"}
                </span>
              </h3>
              <ul className={isFooterMenuone ? "show" : ""}>
                <li>
                  <Link href="/help/">Help</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="/legal-landing/">Legal</Link>
                </li>
                <li>
                  <Link href="/help/">FAQs</Link>
                </li>
              </ul>
              <div className="socialFooter phone">
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
                <div className="drop_down customDrop">
                  <div className="wrapper_dropdown">
                    <Select
                      classNamePrefix="react-select"
                      placeholder="Interested in"
                      options={optionstitle}
                      className={styles.selectCheckout}
                    />
                  </div>
                </div>
                {/* <div className="selectMain">
                  <select name="Interested in" id="Interested in">
                    <option value="Interested in">Interested in</option>
                    <option value="Interested in">Interested in</option>
                    <option value="Interested in">Interested in</option>
                    <option value="Interested in">Interested in</option>
                    <option value="Interested in">Interested in</option>
                  </select>
                </div> */}
                <div className="singleCheckbox">
                  <input
                    type="checkbox"
                    id="consent1"
                    name="consent1"
                    value="consent1"
                  />
                  <label className="form-control" for="consent1">
                    I consent to email marketing
                  </label>
                </div>
                <button type="button" className="allBtn dark">Submit</button>
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
              <p>© Styled Home Studios 2024</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

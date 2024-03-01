"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import LoginPopup from "../Design/CommonPopup/LoginPopup";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const body = document.body;
    if (isActive) {
      body.classList.remove("menuClose");
      body.classList.add("menuOverlay");
    } else {
      body.classList.remove("menuOverlay");
      body.classList.add("menuClose");
    }
  }); // Run useEffect only when isActive changes

  const [isActiveLogin, setIsActiveLogin] = useState(false);
  const handleClickLogin = () => {
    setIsActiveLogin(!isActiveLogin);
  };

  const [isActiveNotify, setIsActiveNotify] = useState(false);
  const handleClickNotify = () => {
    setIsActiveNotify(!isActiveNotify);
  };

  const [isActiveClose, setIsActiveClose] = useState(false);
  useEffect(() => {
    const body = document.body;
    if (isActiveClose) {
      body.classList.add("menuClose");
      body.classList.remove("menuOverlay");
    } else {
      body.classList.remove("menuClose");
      body.classList.add("menuOverlay");
    }
  }, [isActiveClose]); // Run useEffect only when isActive changes

  const handleClickClose = () => {
    setIsActiveClose(!isActiveClose);
  };

  const [LoginPopupIsOpen, SetLoginPopupIsOpen] = useState(false);
  const openLoginPopupModal = () => {
    SetLoginPopupIsOpen(true);
  };

  const closeLoginPopupModal = () => {
    SetLoginPopupIsOpen(false);
  };

  return (
    <section className={styles.mainHeader}>
      <div className={`${"menuOverlay"} ${isActive ? "active" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="logoMain">
              <Link href="/">
                <Image
                  src="/assets/images/logo-new.png"
                  width={177}
                  height={72}
                  sizes="100vw"
                  alt=""
                />
              </Link>
            </div>
            <div className="mainMenu">
              <ul>
                <li>
                  <Link href="#">Book A Location</Link>
                </li>
                <li>
                  <Link href="/become-a-host/">Become A Host</Link>
                </li>
                <li>
                  <Link href="#">Directory</Link>
                </li>
              </ul>
              <div className="menuBtn">
                <Image
                  src={
                    isActive
                      ? "/assets/images/menu-icon-close.svg"
                      : "/assets/images/menu-icon.svg"
                  }
                  width={95}
                  height={55}
                  alt=""
                  onClick={handleClick}
                  className={isActive ? "active" : ""}
                />
                <div className="secondMenu">
                  <ul>
                    <li className="hasBorder">
                      <Link href="#" onClick={openLoginPopupModal}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={handleClickLogin}>
                        Sign Up
                      </Link>
                    </li>
                  </ul>

                  <div
                    className={`${"hideMenus"} ${
                      isActiveLogin ? "active" : ""
                    }`}
                  >
                    <ul className="forMobile">
                      <li>
                        <Link href="#">Book A Location</Link>
                      </li>
                      <li>
                        <Link href="/become-a-host/">Become A Host</Link>
                      </li>
                      <li>
                        <Link href="#">Directory</Link>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <Link href="#" onClick={handleClickNotify}>
                          Notifications
                        </Link>
                      </li>
                      <li>
                        <Link href="#">Messages</Link>
                      </li>
                      <li>
                        <Link href="#">Bookings</Link>
                      </li>
                      <li>
                        <Link href="#">Favourites</Link>
                      </li>
                      <li className="hasBorder">
                        <Link href="#">Become A Host</Link>
                      </li>
                      <li>
                        <Link href="#">Join The Directory</Link>
                      </li>
                      <li>
                        <Link href="#">Your Profile</Link>
                      </li>
                      <li>
                        <Link href="#">Sign Out</Link>
                      </li>
                    </ul>
                  </div>

                  <div
                    className={`${"hideMenus largeMenu"} ${
                      isActiveNotify ? "active" : ""
                    }`}
                  >
                    <ul>
                      <div className="notifyTitle">
                        <span>Notifications</span>
                        <span>
                          <Link href="#" onClick={handleClickClose}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10.414"
                              height="10.414"
                              viewBox="0 0 10.414 10.414"
                            >
                              <g
                                id="Group_4515"
                                data-name="Group 4515"
                                transform="translate(-1720.793 -204.793)"
                              >
                                <path
                                  id="Path_3980"
                                  data-name="Path 3980"
                                  d="M9,0,0,9"
                                  transform="translate(1730.5 214.5) rotate(180)"
                                  fill="none"
                                  stroke="#20535a"
                                  stroke-width="2"
                                />
                                <path
                                  id="Path_4020"
                                  data-name="Path 4020"
                                  d="M9,9,0,0"
                                  transform="translate(1721.5 205.5)"
                                  fill="none"
                                  stroke="#20535a"
                                  stroke-width="2"
                                />
                              </g>
                            </svg>
                          </Link>
                        </span>
                      </div>
                      <li>
                        <div className="notifyInfo">
                          <p>You’ve got a new message from Fabien</p>
                          <Link href="#">View Message</Link>
                        </div>
                      </li>
                      <li>
                        <Link href="#">
                          Here is an example notification goes here on one or
                          two lines of text
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Here is an example notification goes here on one or
                          two lines of text
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Here is an example notification goes here on one or
                          two lines of text
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Here is an example notification goes here on one or
                          two lines of text
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          Here is an example notification goes here on one or
                          two lines of text
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoginPopup
          LoginPopupIsOpen={LoginPopupIsOpen}
          closeLoginPopupModal={closeLoginPopupModal}
        />
      </div>
    </section>
  );
}

export default Header;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import styles from "./locationAllImageOverlay.module.scss";

const LocationAllImageOverlay = (props) => {
  const { OverlayImagesIsOpen, closeOverlayImagesModal } = props;

  return (
    <>
      <Modal
        isOpen={OverlayImagesIsOpen}
        onRequestClose={closeOverlayImagesModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className={styles.locationAllImageOverlay}
      >
        <div>
          <div className="popup-body removeCompare-body">
            <div className="tittle">
              <div className="left">
                <div className="backBtn">
                  <span className="link" onClick={closeOverlayImagesModal}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8.659"
                      height="15.318"
                      viewBox="0 0 8.659 15.318"
                    >
                      <path
                        id="Path_3990"
                        data-name="Path 3990"
                        d="M6.952,0,0,6.952,6.952,13.9"
                        transform="translate(1 0.707)"
                        fill="none"
                        stroke="#20535a"
                        stroke-width="2"
                      />
                    </svg>
                    Back Bright and Light Townhouse – N1
                  </span>
                </div>
              </div>
              <div className="right">
                <Link href="#">
                  <Image
                    src="/assets/images/share.svg"
                    width={33}
                    height={33}
                    alt=""
                  />
                  Share
                </Link>
                <Link href="#">
                  <Image
                    src="/assets/images/save.svg"
                    width={33}
                    height={33}
                    alt=""
                  />
                  Save
                </Link>
              </div>
            </div>
            <div className="gallaryList">
              <ul>
                <li>
                  <Link href="#">Bedrooms</Link>
                </li>
                <li>
                  <Link href="#">Bathrooms</Link>
                </li>
                <li>
                  <Link href="#">Living Areas</Link>
                </li>
                <li>
                  <Link href="#">Dining Areas</Link>
                </li>
                <li>
                  <Link href="#">Exterior</Link>
                </li>
                <li>
                  <Link href="#">OutdoorSpaces</Link>
                </li>
              </ul>
            </div>
            <div className="categoryGallary">
              <h3>Bedrooms</h3>
              <div className="GridGallary">
                <div className="fullGrid">
                  <Image
                    src="/assets/images/gallery.png"
                    width={1009}
                    height={614}
                    alt=""
                  />
                </div>
                <div className="smallGrid">
                  <Image
                    src="/assets/images/gallery-small-new.png"
                    width={311}
                    height={320}
                    alt=""
                  />
                  <Image
                    src="/assets/images/gallery-small-new.png"
                    width={311}
                    height={320}
                    alt=""
                  />
                  <Image
                    src="/assets/images/gallery-small-new.png"
                    width={311}
                    height={320}
                    alt=""
                  />
                  <Image
                    src="/assets/images/gallery-small-new.png"
                    width={311}
                    height={320}
                    alt=""
                  />
                </div>
                <div className="halfGrid">
                  <Image
                    src="/assets/images/gallery-half.png"
                    width={646}
                    height={548}
                    alt=""
                  />
                  <Image
                    src="/assets/images/gallery-half.png"
                    width={646}
                    height={548}
                    alt=""
                  />
                </div>
                <div className="fullGrid">
                  <Image
                    src="/assets/images/gallery.png"
                    width={1009}
                    height={614}
                    alt=""
                  />
                </div>
                <div className="fullGrid">
                  <Image
                    src="/assets/images/gallery.png"
                    width={1009}
                    height={614}
                    alt=""
                  />
                </div>
                <div className="smallGrid">
                  <Image
                    src="/assets/images/gallery-small-new.png"
                    width={311}
                    height={320}
                    alt=""
                  />
                  <Image
                    src="/assets/images/gallery-small-new.png"
                    width={311}
                    height={320}
                    alt=""
                  />
                  <Image
                    src="/assets/images/gallery-small-new.png"
                    width={311}
                    height={320}
                    alt=""
                  />
                  <Image
                    src="/assets/images/gallery-small-new.png"
                    width={311}
                    height={320}
                    alt=""
                  />
                </div>
                <div className="halfGrid">
                  <Image
                    src="/assets/images/gallery-half.png"
                    width={646}
                    height={548}
                    alt=""
                  />
                  <Image
                    src="/assets/images/gallery-half.png"
                    width={646}
                    height={548}
                    alt=""
                  />
                </div>
                <div className="fullGrid">
                  <Image
                    src="/assets/images/gallery.png"
                    width={1009}
                    height={614}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LocationAllImageOverlay;

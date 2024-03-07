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
          <div className="productAdded removeCompare">
            <button
              type="button"
              className="close-btn"
              onClick={closeOverlayImagesModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.012"
                height="10.012"
                viewBox="0 0 10.012 10.012"
              >
                <g
                  id="Group_4550"
                  data-name="Group 4550"
                  transform="translate(0.53 0.53)"
                >
                  <path
                    id="Path_3990"
                    data-name="Path 3990"
                    d="M8.951,0,0,8.951"
                    transform="translate(0 8.951) rotate(-90)"
                    fill="none"
                    stroke="#20535a"
                    stroke-width="1.5"
                  ></path>
                  <path
                    id="Path_4026"
                    data-name="Path 4026"
                    d="M8.951,8.951,0,0"
                    transform="translate(0 8.951) rotate(-90)"
                    fill="none"
                    stroke="#20535a"
                    stroke-width="1.5"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="popup-body removeCompare-body">
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
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LocationAllImageOverlay;

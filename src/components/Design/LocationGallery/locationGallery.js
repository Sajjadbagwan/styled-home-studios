"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Masonry from "@mui/lab/Masonry";
import styles from "./locationGallery.module.scss";
import DownloadPdfPopup from "../CommonPopup/downloadPdf";

function LocationGallery() {
  const [DownloadPdfIsOpen, SetDownloadPdfIsOpen] = useState(false);
  const openDownloadPdfModal = () => {
    SetDownloadPdfIsOpen(true);
  };

  const closeDownloadPdfModal = () => {
    SetDownloadPdfIsOpen(false);
  };
  return (
    <section className={styles.locationGallery + " locationGallery"}>
      <div className="container">
        <div className="backBtn">
          <Link href="#">
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
            Back To Locations
          </Link>
        </div>
        <div className="gallaryMain">
          <div className="tittle">
            <div className="left">
              <div className="first">
                <h1>Bright and Light Townhouse – N1</h1>
                <p>
                  Shoot location with a pared back aesthetic, clean lines and
                  neutral tones.
                </p>
              </div>
              <div className="last">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                  >
                    <path
                      id="Polygon_1"
                      data-name="Polygon 1"
                      d="M8.5,0l2.125,5.95L17,6.111,11.938,9.95,13.753,16,8.5,12.422,3.247,16,5.062,9.95,0,6.111,6.375,5.95Z"
                      fill="#20535a"
                    />
                  </svg>
                  4.5 I 37 Reviews
                </p>
                <p>Area: London, UK</p>
              </div>
            </div>
            <div className="right">
              <span onClick={openDownloadPdfModal}>
                <Image
                  src="/assets/images/download.svg"
                  width={33}
                  height={33}
                  alt=""
                />
                Download PDF
              </span>
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
          <div className="gallery">
            <div className="gallaryLeft">
              <Image
                src="/assets/images/gallery.png"
                width={1009}
                height={614}
                alt=""
              />
            </div>
            <div className="gallaryRight">
              <Image
                src="/assets/images/gallery.png"
                width={286}
                height={295}
                alt=""
              />
              <Image
                src="/assets/images/gallery.png"
                width={286}
                height={295}
                alt=""
              />
              <Image
                src="/assets/images/gallery.png"
                width={286}
                height={295}
                alt=""
              />
              <Image
                src="/assets/images/gallery.png"
                width={286}
                height={295}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="viewBtn">
          <Link href="#" className="allBtn dark">
            View all images
          </Link>
        </div>
        <DownloadPdfPopup
          DownloadPdfIsOpen={DownloadPdfIsOpen}
          closeDownloadPdfModal={closeDownloadPdfModal}
        />
      </div>
    </section>
  );
}

export default LocationGallery;

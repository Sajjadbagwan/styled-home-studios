"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import styles from "./verifyIdentity.module.scss";
const DownloadPdfPopup = (props) => {
  const { DownloadPdfIsOpen, closeDownloadPdfModal } = props;
  return (
    <>
      <Modal
        isOpen={DownloadPdfIsOpen}
        onRequestClose={closeDownloadPdfModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className={
          styles.verifyIdentityPopup +
          " " +
          styles.downloadPdf +
          " " +
          styles.autoSizePopup
        }
      >
        <div>
          <div className="productAdded removeCompare">
            <button
              type="button"
              className="close-btn"
              onClick={closeDownloadPdfModal}
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
            <h3>Please Enter Details To Download PDF</h3>
            <form action="#">
              <div className="inputGroup">
                <input type="text" name="fname" placeholder="Full Name" />
              </div>
              <div className="inputGroup">
                <input type="email" name="email" placeholder="Email" />
                <span className="errorMsg">
                  Please Enter A Valid Email Address
                </span>
              </div>

              <div className="rightAlign">
                <div className="singleCheckbox">
                  <input id="signup" type="checkbox" value="signup" />
                  <label className="form-control" for="signup">
                    Sign me up to receive updates
                  </label>
                </div>
                <input
                  type="submit"
                  className="allBtn dark border"
                  value="Download PDF"
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DownloadPdfPopup;

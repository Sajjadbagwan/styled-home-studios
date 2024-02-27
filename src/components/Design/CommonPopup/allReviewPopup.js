"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import styles from "./verifyIdentity.module.scss";
const AllReviewPopup = (props) => {
  const { AllReviewIsOpen, closeAllReviewModal } = props;
  return (
    <>
      <Modal
        isOpen={AllReviewIsOpen}
        onRequestClose={closeAllReviewModal}
        contentLabel="Example Modal"
        className={styles.verifyIdentityPopup + " " + styles.allReviewPopup}
      >
        <div>
          <div className="productAdded removeCompare">
            <button
              type="button"
              className="close-btn"
              onClick={closeAllReviewModal}
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
            <h3>37 Reviews </h3>
            <div className="reviewList">
              <div className="reviewBox">
                <div className="img">
                  <Image
                    src="/assets/images/review.png"
                    width={137}
                    height={137}
                    alt=""
                  />
                </div>
                <div className="info">
                  <h5>Harry A</h5>
                  <p>June 2022</p>
                  <span>
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
                    4.5
                  </span>
                </div>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </div>
              </div>
              <div className="reviewBox">
                <div className="img">
                  <Image
                    src="/assets/images/review.png"
                    width={137}
                    height={137}
                    alt=""
                  />
                </div>
                <div className="info">
                  <h5>Harry A</h5>
                  <p>June 2022</p>
                  <span>
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
                    4.5
                  </span>
                </div>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </div>
              </div>
              <div className="reviewBox">
                <div className="img">
                  <Image
                    src="/assets/images/review.png"
                    width={137}
                    height={137}
                    alt=""
                  />
                </div>
                <div className="info">
                  <h5>Harry A</h5>
                  <p>June 2022</p>
                  <span>
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
                    4.5
                  </span>
                </div>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </div>
              </div>
              <div className="reviewBox">
                <div className="img">
                  <Image
                    src="/assets/images/review.png"
                    width={137}
                    height={137}
                    alt=""
                  />
                </div>
                <div className="info">
                  <h5>Harry A</h5>
                  <p>June 2022</p>
                  <span>
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
                    4.5
                  </span>
                </div>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AllReviewPopup;

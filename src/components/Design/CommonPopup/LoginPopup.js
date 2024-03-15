"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import styles from "./verifyIdentity.module.scss";
const LoginPopup = (props) => {
  const { LoginPopupIsOpen, closeLoginPopupModal } = props;
  return (
    <>
      <Modal
        isOpen={LoginPopupIsOpen}
        onRequestClose={closeLoginPopupModal}
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
              onClick={closeLoginPopupModal}
              aria-label="close-btn"
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
            <div className="loginMain">
              <div className="loginLeft">
                <h3>LOGIN</h3>
                <form action="#">
                  <div className="inputGroup">
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="inputGroup">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>

                  <div className="rightAlign">
                    <Link href="#">Forgot Your Password</Link>
                    <input
                      type="submit"
                      className="allBtn dark border"
                      value="Login"
                    />
                  </div>
                </form>
              </div>
              <div className="loginRight">
                <div>
                  <h3>I’m New Here</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link href="/create-an-account/" className="allBtn dark border">Create An Account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginPopup;

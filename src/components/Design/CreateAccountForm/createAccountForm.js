"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./createAccountForm.module.scss";

function CreateAccountForm() {
  return (
    <section className={styles.createAccountForm}>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="mainForm">
          <div className="signup">
            <div>
              <h3>Create An Account</h3>
              <form action="#">
                <div className="halfInput">
                  <div className="inputGroup">
                    <input type="text" name="fname" placeholder="First Name" />
                  </div>
                  <div className="inputGroup">
                    <input type="text" name="sname" placeholder="Surname" />
                  </div>
                </div>
                <div className="halfInput">
                  <div className="inputGroup">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="inputGroup">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Mobile (this will not be shared)"
                    />
                  </div>
                </div>
                <div className="halfInput">
                  <div className="inputGroup">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="inputGroup">
                    <input
                      type="password"
                      name="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="rightAlign">
                  <div className="checkMain">
                    <label for="signup">
                      I consent to email marketing
                      <input id="signup" type="checkbox" value="signup" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <input
                    type="submit"
                    className="allBtn dark border"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="login">
            <div>
              <h3>Already Have An Account?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="#" className="allBtn dark border">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateAccountForm;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./signUpForm.module.scss";
import Select from "react-select";

function SignUpForm() {
  const optionstitle = [
    { value: "Interested in", label: "Interested in" },
    { value: "Interested in", label: "Interested in" },
  ];

  return (
    <section className={styles.signUpForm + " signUpForm"}>
      <div className="container">
        <div className="innerForm">
          <div className="formImg">
            <Image
              src="/assets/images/signup.png"
              width={551}
              height={703}
              alt=""
            />
          </div>
          <div className="formRight">
            <h2>
              Stay Informed About Our Latest
              <br /> Journal Entries
            </h2>
            <form>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Full Name"
              />
              <input type="email" id="email" name="email" placeholder="Email" />
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
                  id="consent"
                  name="consent"
                  value="consent"
                />
                <label className="form-control" for="consent">
                  I consent to email marketing
                </label>
              </div>
              <button type="button" className="allBtn dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;

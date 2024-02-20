"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./signUpForm.module.scss";

function SignUpForm() {
  return (
    <section className={styles.signUpForm}>
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
              <div className="selectMain">
                <select name="Interested in" id="Interested in">
                  <option value="Interested in">Interested in</option>
                  <option value="Interested in">Interested in</option>
                  <option value="Interested in">Interested in</option>
                  <option value="Interested in">Interested in</option>
                  <option value="Interested in">Interested in</option>
                </select>
              </div>
              <div className="checkMain">
                <label for="consent">
                  I consent to email marketing
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    value="consent"
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <input type="submit" className="allBtn dark" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;

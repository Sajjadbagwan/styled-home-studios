"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./marketingSignUp.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Select from "react-select";

function MakrtingSignUpSection() {
  const optionstitle = [
    { value: "Interested in", label: "Interested in" },
    { value: "Interested in", label: "Interested in" },
  ];
  return (
    <section className={styles.makrtingSignUpSection}>
      <div className="container-fluid">
        <div className="row">
          <div className="heroImg">
            <Image
              src="/assets/images/marketing.png"
              width={1081}
              height={931}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className="heroDetail">
            <div className="inner">
              <h1>Stay informed about our latest journal entries</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam
              </p>
              <form>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
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
                    id="consent1"
                    name="consent1"
                    value="consent1"
                  />
                  <label className="form-control" for="consent1">
                    I consent to email marketing
                  </label>
                </div>
                <input type="submit" className="allBtn dark" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakrtingSignUpSection;

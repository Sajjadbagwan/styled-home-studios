"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./homeHero.module.scss";

function HomeHero() {
  return (
    <section className={styles.homeHero}>
      <div className="container-fluid">
        <div className="row">
          <div className="heroDetail">
            <div className="inner">
              <h1>handpicked shoot locations for photoshoots & content</h1>
              <form>
                <div>
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="London, Edinburgh, Yorkshire"
                    name="search"
                  />
                </div>
                <div>
                  <label>Keywords</label>
                  <input
                    type="text"
                    placeholder="Kitchen, Garden, Bedroom"
                    name="search"
                  />
                </div>
                <button type="submit">
                  <Image
                    src="/assets/images/search.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </button>
              </form>
              <ul>
                <li>
                  <Link href="#">Category 1</Link>
                </li>
                <li>
                  <Link href="#">Category 2</Link>
                </li>
                <li>
                  <Link href="#">Category 3</Link>
                </li>
                <li>
                  <Link href="#">Category 4</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="heroImg">
            <Image
              src="/assets/images/slider.png"
              width={1081}
              height={931}
              sizes="100vw"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;

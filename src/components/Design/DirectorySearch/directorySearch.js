"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThankyouIcon from "../../../../public/assets/images/thankyou-property.svg";
import styles from "./directorySearch.module.scss";

function DirectorySearch() {
  return (
    <div className={styles.directorySearchSection}>
      <div className="container">
        <div className="searchDirectory">
            <form>
                <div>
                    <label>Creative</label>
                    <input
                    type="text"
                    placeholder="Photographers, Makeup Stylist"
                    name="search"
                    />
                </div>
                <div>
                    <label>Location</label>
                    <input
                    type="text"
                    placeholder="London, Edinburgh, Yorkshire"
                    name="search"
                    />
                </div>
                <button type="submit" aria-label="search-btn">
                    <Image
                    src="/assets/images/search.svg"
                    width={24}
                    height={24}
                    alt=""
                    />
                </button>
            </form>
        </div>   
      </div>
    </div>
  );
}

export default DirectorySearch;

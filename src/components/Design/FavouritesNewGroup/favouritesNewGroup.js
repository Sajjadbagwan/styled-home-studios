"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./favouritesNewGroup.module.scss";

function FavouritesNewGroup() {
  return (
    <section className={styles.favouritesNewGroup}>
      <div className="container">
        <div className="title">
          <h2>Favourite List Group Name</h2>
          <div className="titleLinks">
            <Link href="#">
              <Image
                src="/assets/images/edit.svg"
                alt="host"
                width={10}
                height={17}
              />
              Edit Group Name
            </Link>
            <Link href="#">Delete List</Link>
          </div>
        </div>
        <div className="popupInfo">
          <div className="popupBox createGroup">
            <div className="popupImg">
              <Image
                src="/assets/images/create-group.png"
                width={474}
                height={325}
                alt=""
              />
            </div>
            <div className="addGroup">
              <Link href="#">
                <Image
                  src="/assets/images/add-group.png"
                  width={85}
                  height={85}
                  alt=""
                />
                <span>Create New Favourites Group</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FavouritesNewGroup;

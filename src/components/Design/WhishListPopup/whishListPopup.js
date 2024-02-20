"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./whishListPopup.module.scss";

function WhishListPopup() {
  const FavouriteData = [
    {
      image: "/assets/images/whishlist-popup.png",
      groupname: "Favourite List Group Name",
    },
    {
      image: "/assets/images/whishlist-popup.png",
      groupname: "Favourite List Group Name",
    },
    {
      image: "/assets/images/whishlist-popup.png",
      groupname: "Favourite List Group Name",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClickPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="whishList" onClick={handleClickPopup}>
        <Image
          src="/assets/images/border-heart.svg"
          width={16}
          height={13}
          alt=""
        />
      </div>
      {isOpen && (
        <div className={styles.mainPopup}>
          <div className="innerPopup">
            <button className="close" onClick={handleClickPopup}>
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
                  />
                  <path
                    id="Path_4026"
                    data-name="Path 4026"
                    d="M8.951,8.951,0,0"
                    transform="translate(0 8.951) rotate(-90)"
                    fill="none"
                    stroke="#20535a"
                    stroke-width="1.5"
                  />
                </g>
              </svg>
            </button>
            <h2>Add To Favourites</h2>
            <div className="popupInfo">
              {FavouriteData.map((product, index) => (
                <div key={index} className="popupBox">
                  <div className="popupImg">
                    <Image
                      src={product.image}
                      width={474}
                      height={325}
                      alt=""
                    />
                  </div>
                  <h3>{product.groupname}</h3>
                </div>
              ))}
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
        </div>
      )}
    </>
  );
}

export default WhishListPopup;

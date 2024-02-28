"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import styles from "./verifyIdentity.module.scss";
const AvalibleSpacePopup = (props) => {
  const { avalibleSpaceIsOpen, closeavalibleSpaceModal } = props;
  return (
    <>
      <Modal
        isOpen={avalibleSpaceIsOpen}
        onRequestClose={closeavalibleSpaceModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className={
          styles.verifyIdentityPopup +
          " " +
          styles.avalibleSpace +
          " " +
          styles.autoSizePopup
        }
      >
        <div>
          <div className="productAdded removeCompare">
            <button
              type="button"
              className="close-btn"
              onClick={closeavalibleSpaceModal}
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
            <h2>Available Spaces</h2>
            <h3>Indoor Spaces</h3>
            <div className="allAvalible">
              <div>
                <Image src="/assets/images/Garden.svg" width={32} height={42} />
                <span>Garden</span>
              </div>
              <div>
                <Image
                  src="/assets/images/Kitchen.svg"
                  width={32}
                  height={42}
                />
                <span>Kitchen</span>
              </div>
              <div>
                <Image
                  src="/assets/images/Bedroom.svg"
                  width={32}
                  height={42}
                />
                <span>4 x Bedrooms</span>
              </div>
              <div>
                <Image src="/assets/images/Tick.svg" width={32} height={42} />
                <span>Outside Area</span>
                <p>Fire pit, floral edging, enclosed garden</p>
              </div>
              <div>
                <Image src="/assets/images/Tick.svg" width={32} height={42} />
                <span>Living room</span>
              </div>
            </div>
            <div className="spaceBox">
              <h3>Outdoor Spaces</h3>
              <div className="allAvalible tick">
                <div>
                  <Image src="/assets/images/Tick.svg" width={32} height={42} />
                  <span>Pool House</span>
                </div>
                <div>
                  <Image src="/assets/images/Tick.svg" width={32} height={42} />
                  <span>Outdoor pool</span>
                </div>
              </div>
            </div>
            <div className="spaceBox">
              <h3>Notable Features</h3>
              <div className="allAvalible tick">
                <div>
                  <Image src="/assets/images/Tick.svg" width={32} height={42} />
                  <span>Fountain</span>
                </div>
                <div>
                  <Image src="/assets/images/Tick.svg" width={32} height={42} />
                  <span>Large Garden</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AvalibleSpacePopup;

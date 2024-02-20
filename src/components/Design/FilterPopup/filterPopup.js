"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./filterPopup.module.scss";

function FilterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Link onClick={handleClickPopup} href="#" className="allBtn border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.686"
          height="10.75"
          viewBox="0 0 19.686 10.75"
        >
          <g
            id="Group_4557"
            data-name="Group 4557"
            transform="translate(-1699.864 -71.694)"
          >
            <path
              id="Path_4007"
              data-name="Path 4007"
              d="M3689.864,72.069h19.686"
              transform="translate(-1990)"
              fill="none"
              stroke="#20535a"
              stroke-width="0.75"
            />
            <path
              id="Path_4008"
              data-name="Path 4008"
              d="M3689.864,72.069h19.686"
              transform="translate(-1990 5)"
              fill="none"
              stroke="#20535a"
              stroke-width="0.75"
            />
            <path
              id="Path_4009"
              data-name="Path 4009"
              d="M3689.864,72.069h19.686"
              transform="translate(-1990 10)"
              fill="none"
              stroke="#20535a"
              stroke-width="0.75"
            />
          </g>
        </svg>
        Filter
      </Link>
      {isOpen && (
        <div className={styles.mainPopup + " mainPopup"}>
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
            <h2>Filter</h2>
            <div className="popupInfo">
              <div className="filterUl">
                <ul>
                  <li>
                    <Link href="#shoot-essentials">Shoot Essentials</Link>
                  </li>
                  <li>
                    <Link href="#">Colours, Patterns & Materials</Link>
                  </li>
                  <li>
                    <Link href="#">Spaces</Link>
                  </li>
                  <li>
                    <Link href="#">Styles</Link>
                  </li>
                  <li>
                    <Link href="#">Rules</Link>
                  </li>
                  <li>
                    <Link href="#">Available For</Link>
                  </li>
                </ul>
              </div>
              <div className="outerMain shootMain" id="shoot-essentials">
                <h4>Shoot Essentials</h4>
                <div className="price">
                  <h5>Price</h5>
                </div>
                <div className="minBooking">
                  <h5>Minimum Booking Hours</h5>
                </div>
                <div className="parking">
                  <h5>Parking</h5>
                  <div className="selectBtns">
                    <div>
                      <input type="checkbox" id="1" value="1" />
                      <label class="allBtn border" for="1">
                        Any
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" id="2" value="2" />
                      <label class="allBtn border" for="2">
                        Onsite parking
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" id="3" value="3" />
                      <label class="allBtn border" for="3">
                        Free parking
                      </label>
                    </div>
                  </div>
                </div>
                <div className="Lighting">
                  <h5>Lighting</h5>
                  <div className="selectBtns">
                    <div>
                      <input type="checkbox" id="4" value="4" />
                      <label class="allBtn border" for="4">
                        Any
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" id="5" value="5" />
                      <label class="allBtn border" for="5">
                        Abundant Natural Light
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" id="6" value="6" />
                      <label class="allBtn border" for="6">
                        Blackout Blinds
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" id="7" value="7" />
                      <label class="allBtn border" for="7">
                        North Facing
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" id="8" value="8" />
                      <label class="allBtn border" for="8">
                        South Facing
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" id="9" value="9" />
                      <label class="allBtn border" for="9">
                        Artificial light
                      </label>
                    </div>
                  </div>
                </div>
                <div className="Sound">
                  <h5>Sound</h5>
                  <div className="selectBtns">
                    <div>
                      <input type="checkbox" id="10" value="10" />
                      <label class="allBtn border" for="10">
                        Any
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" id="11" value="11" />
                      <label class="allBtn border" for="11">
                        Low Ambient Noise
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" id="12" value="12" />
                      <label class="allBtn border" for="12">
                        Soundproof
                      </label>
                    </div>
                  </div>
                </div>
                <div className="Accessibility"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterPopup;

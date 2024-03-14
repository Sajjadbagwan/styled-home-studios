"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./filterPopup.module.scss";
import MultiRangeSlider from "multi-range-slider-react";

function FilterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickPopup = () => {
    setIsOpen(!isOpen);
  };

  const [isOpenList, setIsOpenList] = useState(false);
  const handleClickPopupList = () => {
    setIsOpenList(!isOpenList);
  };

  const [isOpenList2, setIsOpenList2] = useState(false);
  const handleClickPopupList2 = () => {
    setIsOpenList2(!isOpenList2);
  };

  const [isOpenList3, setIsOpenList3] = useState(false);
  const handleClickPopupList3 = () => {
    setIsOpenList3(!isOpenList3);
  };

  const [isOpenList4, setIsOpenList4] = useState(false);
  const handleClickPopupList4 = () => {
    setIsOpenList4(!isOpenList4);
  };

  const [isOpenList5, setIsOpenList5] = useState(false);
  const handleClickPopupList5 = () => {
    setIsOpenList5(!isOpenList5);
  };

  const [isOpenList6, setIsOpenList6] = useState(false);
  const handleClickPopupList6 = () => {
    setIsOpenList6(!isOpenList6);
  };

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(875);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const [minValue2, set_minValue2] = useState(1);
  const [maxValue2, set_maxValue2] = useState(24);
  const handleInput2 = (e) => {
    set_minValue2(e.minValue);
    set_maxValue2(e.maxValue);
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
            <button className="close" aria-label="close-btn" onClick={handleClickPopup}>
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
            <form className="popupInfo">
              <div className="filterUl">
                <ul>
                  <li>
                    <Link href="#shoot-essentials">Shoot Essentials</Link>
                  </li>
                  <li>
                    <Link href="#colours-Patterns-Materials">
                      Colours, Patterns & Materials
                    </Link>
                  </li>
                  <li>
                    <Link href="#spaces">Spaces</Link>
                  </li>
                  <li>
                    <Link href="#styles">Styles</Link>
                  </li>
                  <li>
                    <Link href="#rules">Rules</Link>
                  </li>
                  <li>
                    <Link href="#available-for">Available For</Link>
                  </li>
                </ul>
              </div>
              <div className="scrollDiv">
                <div
                  className={`${"outerMain shootMain"} ${
                    isOpenList ? "" : "show"
                  }`}
                  id="shoot-essentials"
                >
                  <h4 onClick={handleClickPopupList}>Shoot Essentials</h4>
                  <div className="showContent">
                    <div className="price">
                      <h5>Price</h5>

                      <MultiRangeSlider
                        min={100}
                        max={900}
                        step={5}
                        minValue={minValue}
                        maxValue={maxValue}
                        minCaption={minValue + " per hour"}
                        maxCaption={maxValue + " per hour"}
                        label={true}
                        labels={[
                          minValue + " per hour",
                          maxValue + " per hour",
                        ]}
                        onInput={(e) => {
                          handleInput(e);
                        }}
                      />
                    </div>
                    <div className="minBooking">
                      <h5>Minimum Booking Hours</h5>

                      <MultiRangeSlider
                        min={1}
                        max={24}
                        step={5}
                        minValue={minValue2}
                        maxValue={maxValue2}
                        minCaption={minValue2 + " hour"}
                        maxCaption={maxValue2 + " hour"}
                        label={true}
                        labels={[minValue2 + " hour", maxValue2 + " hour"]}
                        onInput={(e) => {
                          handleInput2(e);
                        }}
                      />
                    </div>
                    <div className="parking">
                      <h5>Parking</h5>
                      <div className="selectBtns">
                        <div>
                          <input type="checkbox" id="1" value="1" />
                          <label className="allBtn border" for="1">
                            Any
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="2" value="2" />
                          <label className="allBtn border" for="2">
                            Onsite parking
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="3" value="3" />
                          <label className="allBtn border" for="3">
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
                          <label className="allBtn border" for="4">
                            Any
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="5" value="5" />
                          <label className="allBtn border" for="5">
                            Abundant Natural Light
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="6" value="6" />
                          <label className="allBtn border" for="6">
                            Blackout Blinds
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="7" value="7" />
                          <label className="allBtn border" for="7">
                            North Facing
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="8" value="8" />
                          <label className="allBtn border" for="8">
                            South Facing
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="9" value="9" />
                          <label className="allBtn border" for="9">
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
                          <label className="allBtn border" for="10">
                            Any
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="11" value="11" />
                          <label className="allBtn border" for="11">
                            Low Ambient Noise
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="12" value="12" />
                          <label className="allBtn border" for="12">
                            Soundproof
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="Accessibility">
                      <h5>Accessibility</h5>
                      <div className="selectBtns">
                        <div>
                          <input type="checkbox" id="13" value="13" />
                          <label className="allBtn border" for="13">
                            Any
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="14" value="14" />
                          <label className="allBtn border" for="14">
                            Wheelchair Accessible
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="15" value="15" />
                          <label className="allBtn border" for="15">
                            Ramps Available
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="16" value="16" />
                          <label className="allBtn border" for="16">
                            Lift Available
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="colorPattern">
                      <h5>Amenities</h5>
                      <div className="simpleCheckbox">
                        <div className="singleCheckbox">
                          <input type="checkbox" id="18" value="18" />
                          <label className="form-control" for="18">
                            Wifi
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="19" value="19" />
                          <label className="form-control" for="19">
                            Tea & Coffee
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="20" value="20" />
                          <label className="form-control" for="20">
                            Lighting Equipment
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="21" value="21" />
                          <label className="form-control" for="21">
                            White Dropdown
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="22" value="22" />
                          <label className="form-control" for="22">
                            Wardrobe Rail
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="23" value="23" />
                          <label className="form-control" for="23">
                            Clothes Steamer
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${"outerMain colorMain"} ${
                    isOpenList2 ? "" : "show"
                  }`}
                  id="colours-Patterns-Materials"
                >
                  <h4 onClick={handleClickPopupList2}>
                    Colours, Patterns & Materials
                  </h4>
                  <div className="showContent">
                    <div className="colorPattern">
                      <h5>Colours & Patterns</h5>
                      <div className="simpleCheckbox">
                        <div className="singleCheckbox">
                          <input type="checkbox" id="Silver" value="Silver" />
                          <label className="form-control" for="Silver">
                            Silver
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Teal" value="Teal" />
                          <label className="form-control" for="Teal">
                            Teal
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Black" value="Black" />
                          <label className="form-control" for="Black">
                            Black
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Grey" value="Grey" />
                          <label className="form-control" for="Grey">
                            Grey
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neon" value="Neon" />
                          <label className="form-control" for="Neon">
                            Neon
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Tartan" value="Tartan" />
                          <label className="form-control" for="Tartan">
                            Tartan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Red" value="Red" />
                          <label className="form-control" for="Red">
                            Red
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Blue" value="Blue" />
                          <label className="form-control" for="Blue">
                            Blue
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Animal Print"
                            value="Animal Print"
                          />
                          <label className="form-control" for="Animal Print">
                            Animal Print
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Botanical"
                            value="Botanical"
                          />
                          <label className="form-control" for="Botanical">
                            Botanical
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cream" value="Cream" />
                          <label className="form-control" for="Cream">
                            Cream
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neutral" value="Neutral" />
                          <label className="form-control" for="Neutral">
                            Neutral
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Taupe" value="Taupe" />
                          <label className="form-control" for="Taupe">
                            Taupe
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Magenta" value="Magenta" />
                          <label className="form-control" for="Magenta">
                            Magenta
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Green" value="Green" />
                          <label className="form-control" for="Green">
                            Green
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Geometric"
                            value="Geometric"
                          />
                          <label className="form-control" for="Geometric">
                            Geometric
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Brown" value="Brown" />
                          <label className="form-control" for="Brown">
                            Brown
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Gold" value="Gold" />
                          <label className="form-control" for="Gold">
                            Gold
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pink" value="Pink" />
                          <label className="form-control" for="Pink">
                            Pink
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="White" value="White" />
                          <label className="form-control" for="White">
                            White
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cyan" value="Cyan" />
                          <label className="form-control" for="Cyan">
                            Cyan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pastel" value="Pastel" />
                          <label className="form-control" for="Pastel">
                            Pastel
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Aquamarine"
                            value="Aquamarine"
                          />
                          <label className="form-control" for="Aquamarine">
                            Aquamarine
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Orange" value="Orange" />
                          <label className="form-control" for="Orange">
                            Orange
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Purple" value="Purple" />
                          <label className="form-control" for="Purple">
                            Purple
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Peach" value="Peach" />
                          <label className="form-control" for="Peach">
                            Peach
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Yellow" value="Yellow" />
                          <label className="form-control" for="Yellow">
                            Yellow
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Maroon" value="Maroon" />
                          <label className="form-control" for="Maroon">
                            Maroon
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="materials">
                      <h5>Materials</h5>
                      <div className="simpleCheckbox">
                        <div className="singleCheckbox">
                          <input type="checkbox" id="Silver" value="Silver" />
                          <label className="form-control" for="Silver">
                            Silver
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Teal" value="Teal" />
                          <label className="form-control" for="Teal">
                            Teal
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Black" value="Black" />
                          <label className="form-control" for="Black">
                            Black
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Grey" value="Grey" />
                          <label className="form-control" for="Grey">
                            Grey
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neon" value="Neon" />
                          <label className="form-control" for="Neon">
                            Neon
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Tartan" value="Tartan" />
                          <label className="form-control" for="Tartan">
                            Tartan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Red" value="Red" />
                          <label className="form-control" for="Red">
                            Red
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Blue" value="Blue" />
                          <label className="form-control" for="Blue">
                            Blue
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Animal Print"
                            value="Animal Print"
                          />
                          <label className="form-control" for="Animal Print">
                            Animal Print
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Botanical"
                            value="Botanical"
                          />
                          <label className="form-control" for="Botanical">
                            Botanical
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cream" value="Cream" />
                          <label className="form-control" for="Cream">
                            Cream
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neutral" value="Neutral" />
                          <label className="form-control" for="Neutral">
                            Neutral
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Taupe" value="Taupe" />
                          <label className="form-control" for="Taupe">
                            Taupe
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Magenta" value="Magenta" />
                          <label className="form-control" for="Magenta">
                            Magenta
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Green" value="Green" />
                          <label className="form-control" for="Green">
                            Green
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Geometric"
                            value="Geometric"
                          />
                          <label className="form-control" for="Geometric">
                            Geometric
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Brown" value="Brown" />
                          <label className="form-control" for="Brown">
                            Brown
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Gold" value="Gold" />
                          <label className="form-control" for="Gold">
                            Gold
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pink" value="Pink" />
                          <label className="form-control" for="Pink">
                            Pink
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="White" value="White" />
                          <label className="form-control" for="White">
                            White
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cyan" value="Cyan" />
                          <label className="form-control" for="Cyan">
                            Cyan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pastel" value="Pastel" />
                          <label className="form-control" for="Pastel">
                            Pastel
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Aquamarine"
                            value="Aquamarine"
                          />
                          <label className="form-control" for="Aquamarine">
                            Aquamarine
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Orange" value="Orange" />
                          <label className="form-control" for="Orange">
                            Orange
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Purple" value="Purple" />
                          <label className="form-control" for="Purple">
                            Purple
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Peach" value="Peach" />
                          <label className="form-control" for="Peach">
                            Peach
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Yellow" value="Yellow" />
                          <label className="form-control" for="Yellow">
                            Yellow
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Maroon" value="Maroon" />
                          <label className="form-control" for="Maroon">
                            Maroon
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${"outerMain spaces"} ${
                    isOpenList3 ? "" : "show"
                  }`}
                  id="spaces"
                >
                  <h4 onClick={handleClickPopupList3}>Spaces</h4>
                  <div className="showContent">
                    <div className="indoorSpaces">
                      <h5>Indoor Spaces</h5>
                      <div className="simpleCheckbox">
                        <div className="singleCheckbox">
                          <input type="checkbox" id="Silver" value="Silver" />
                          <label className="form-control" for="Silver">
                            Silver
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Teal" value="Teal" />
                          <label className="form-control" for="Teal">
                            Teal
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Black" value="Black" />
                          <label className="form-control" for="Black">
                            Black
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Grey" value="Grey" />
                          <label className="form-control" for="Grey">
                            Grey
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neon" value="Neon" />
                          <label className="form-control" for="Neon">
                            Neon
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Tartan" value="Tartan" />
                          <label className="form-control" for="Tartan">
                            Tartan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Red" value="Red" />
                          <label className="form-control" for="Red">
                            Red
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Blue" value="Blue" />
                          <label className="form-control" for="Blue">
                            Blue
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Animal Print"
                            value="Animal Print"
                          />
                          <label className="form-control" for="Animal Print">
                            Animal Print
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Botanical"
                            value="Botanical"
                          />
                          <label className="form-control" for="Botanical">
                            Botanical
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cream" value="Cream" />
                          <label className="form-control" for="Cream">
                            Cream
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neutral" value="Neutral" />
                          <label className="form-control" for="Neutral">
                            Neutral
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Taupe" value="Taupe" />
                          <label className="form-control" for="Taupe">
                            Taupe
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Magenta" value="Magenta" />
                          <label className="form-control" for="Magenta">
                            Magenta
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Green" value="Green" />
                          <label className="form-control" for="Green">
                            Green
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Geometric"
                            value="Geometric"
                          />
                          <label className="form-control" for="Geometric">
                            Geometric
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Brown" value="Brown" />
                          <label className="form-control" for="Brown">
                            Brown
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Gold" value="Gold" />
                          <label className="form-control" for="Gold">
                            Gold
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pink" value="Pink" />
                          <label className="form-control" for="Pink">
                            Pink
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="White" value="White" />
                          <label className="form-control" for="White">
                            White
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cyan" value="Cyan" />
                          <label className="form-control" for="Cyan">
                            Cyan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pastel" value="Pastel" />
                          <label className="form-control" for="Pastel">
                            Pastel
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Aquamarine"
                            value="Aquamarine"
                          />
                          <label className="form-control" for="Aquamarine">
                            Aquamarine
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Orange" value="Orange" />
                          <label className="form-control" for="Orange">
                            Orange
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Purple" value="Purple" />
                          <label className="form-control" for="Purple">
                            Purple
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Peach" value="Peach" />
                          <label className="form-control" for="Peach">
                            Peach
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Yellow" value="Yellow" />
                          <label className="form-control" for="Yellow">
                            Yellow
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Maroon" value="Maroon" />
                          <label className="form-control" for="Maroon">
                            Maroon
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="outdoorspaces">
                      <h5>Outdoor Spaces</h5>
                      <div className="simpleCheckbox">
                        <div className="singleCheckbox">
                          <input type="checkbox" id="Silver" value="Silver" />
                          <label className="form-control" for="Silver">
                            Silver
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Teal" value="Teal" />
                          <label className="form-control" for="Teal">
                            Teal
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Black" value="Black" />
                          <label className="form-control" for="Black">
                            Black
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Grey" value="Grey" />
                          <label className="form-control" for="Grey">
                            Grey
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neon" value="Neon" />
                          <label className="form-control" for="Neon">
                            Neon
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Tartan" value="Tartan" />
                          <label className="form-control" for="Tartan">
                            Tartan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Red" value="Red" />
                          <label className="form-control" for="Red">
                            Red
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Blue" value="Blue" />
                          <label className="form-control" for="Blue">
                            Blue
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Animal Print"
                            value="Animal Print"
                          />
                          <label className="form-control" for="Animal Print">
                            Animal Print
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Botanical"
                            value="Botanical"
                          />
                          <label className="form-control" for="Botanical">
                            Botanical
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cream" value="Cream" />
                          <label className="form-control" for="Cream">
                            Cream
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neutral" value="Neutral" />
                          <label className="form-control" for="Neutral">
                            Neutral
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Taupe" value="Taupe" />
                          <label className="form-control" for="Taupe">
                            Taupe
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Magenta" value="Magenta" />
                          <label className="form-control" for="Magenta">
                            Magenta
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Green" value="Green" />
                          <label className="form-control" for="Green">
                            Green
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Geometric"
                            value="Geometric"
                          />
                          <label className="form-control" for="Geometric">
                            Geometric
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Brown" value="Brown" />
                          <label className="form-control" for="Brown">
                            Brown
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Gold" value="Gold" />
                          <label className="form-control" for="Gold">
                            Gold
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pink" value="Pink" />
                          <label className="form-control" for="Pink">
                            Pink
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="White" value="White" />
                          <label className="form-control" for="White">
                            White
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cyan" value="Cyan" />
                          <label className="form-control" for="Cyan">
                            Cyan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pastel" value="Pastel" />
                          <label className="form-control" for="Pastel">
                            Pastel
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Aquamarine"
                            value="Aquamarine"
                          />
                          <label className="form-control" for="Aquamarine">
                            Aquamarine
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Orange" value="Orange" />
                          <label className="form-control" for="Orange">
                            Orange
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Purple" value="Purple" />
                          <label className="form-control" for="Purple">
                            Purple
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Peach" value="Peach" />
                          <label className="form-control" for="Peach">
                            Peach
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Yellow" value="Yellow" />
                          <label className="form-control" for="Yellow">
                            Yellow
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Maroon" value="Maroon" />
                          <label className="form-control" for="Maroon">
                            Maroon
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="notableFeatures">
                      <h5>Notable Features</h5>
                      <div className="simpleCheckbox">
                        <div className="singleCheckbox">
                          <input type="checkbox" id="Silver" value="Silver" />
                          <label className="form-control" for="Silver">
                            Silver
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Teal" value="Teal" />
                          <label className="form-control" for="Teal">
                            Teal
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Black" value="Black" />
                          <label className="form-control" for="Black">
                            Black
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Grey" value="Grey" />
                          <label className="form-control" for="Grey">
                            Grey
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neon" value="Neon" />
                          <label className="form-control" for="Neon">
                            Neon
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Tartan" value="Tartan" />
                          <label className="form-control" for="Tartan">
                            Tartan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Red" value="Red" />
                          <label className="form-control" for="Red">
                            Red
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Blue" value="Blue" />
                          <label className="form-control" for="Blue">
                            Blue
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Animal Print"
                            value="Animal Print"
                          />
                          <label className="form-control" for="Animal Print">
                            Animal Print
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Botanical"
                            value="Botanical"
                          />
                          <label className="form-control" for="Botanical">
                            Botanical
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cream" value="Cream" />
                          <label className="form-control" for="Cream">
                            Cream
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neutral" value="Neutral" />
                          <label className="form-control" for="Neutral">
                            Neutral
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Taupe" value="Taupe" />
                          <label className="form-control" for="Taupe">
                            Taupe
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Magenta" value="Magenta" />
                          <label className="form-control" for="Magenta">
                            Magenta
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Green" value="Green" />
                          <label className="form-control" for="Green">
                            Green
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Geometric"
                            value="Geometric"
                          />
                          <label className="form-control" for="Geometric">
                            Geometric
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Brown" value="Brown" />
                          <label className="form-control" for="Brown">
                            Brown
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Gold" value="Gold" />
                          <label className="form-control" for="Gold">
                            Gold
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pink" value="Pink" />
                          <label className="form-control" for="Pink">
                            Pink
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="White" value="White" />
                          <label className="form-control" for="White">
                            White
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cyan" value="Cyan" />
                          <label className="form-control" for="Cyan">
                            Cyan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pastel" value="Pastel" />
                          <label className="form-control" for="Pastel">
                            Pastel
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Aquamarine"
                            value="Aquamarine"
                          />
                          <label className="form-control" for="Aquamarine">
                            Aquamarine
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Orange" value="Orange" />
                          <label className="form-control" for="Orange">
                            Orange
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Purple" value="Purple" />
                          <label className="form-control" for="Purple">
                            Purple
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Peach" value="Peach" />
                          <label className="form-control" for="Peach">
                            Peach
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Yellow" value="Yellow" />
                          <label className="form-control" for="Yellow">
                            Yellow
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Maroon" value="Maroon" />
                          <label className="form-control" for="Maroon">
                            Maroon
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${"outerMain styles"} ${
                    isOpenList4 ? "" : "show"
                  }`}
                  id="styles"
                >
                  <h4 onClick={handleClickPopupList4}>Styles</h4>
                  <div className="showContent">
                    <div className="buildingPeriod">
                      <h5>Building Period</h5>
                      <div className="simpleCheckbox">
                        <div className="singleCheckbox">
                          <input type="checkbox" id="Silver" value="Silver" />
                          <label className="form-control" for="Silver">
                            Silver
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Teal" value="Teal" />
                          <label className="form-control" for="Teal">
                            Teal
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Black" value="Black" />
                          <label className="form-control" for="Black">
                            Black
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Grey" value="Grey" />
                          <label className="form-control" for="Grey">
                            Grey
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neon" value="Neon" />
                          <label className="form-control" for="Neon">
                            Neon
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Tartan" value="Tartan" />
                          <label className="form-control" for="Tartan">
                            Tartan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Red" value="Red" />
                          <label className="form-control" for="Red">
                            Red
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Blue" value="Blue" />
                          <label className="form-control" for="Blue">
                            Blue
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Animal Print"
                            value="Animal Print"
                          />
                          <label className="form-control" for="Animal Print">
                            Animal Print
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Botanical"
                            value="Botanical"
                          />
                          <label className="form-control" for="Botanical">
                            Botanical
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cream" value="Cream" />
                          <label className="form-control" for="Cream">
                            Cream
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neutral" value="Neutral" />
                          <label className="form-control" for="Neutral">
                            Neutral
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Taupe" value="Taupe" />
                          <label className="form-control" for="Taupe">
                            Taupe
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Magenta" value="Magenta" />
                          <label className="form-control" for="Magenta">
                            Magenta
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Green" value="Green" />
                          <label className="form-control" for="Green">
                            Green
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Geometric"
                            value="Geometric"
                          />
                          <label className="form-control" for="Geometric">
                            Geometric
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Brown" value="Brown" />
                          <label className="form-control" for="Brown">
                            Brown
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Gold" value="Gold" />
                          <label className="form-control" for="Gold">
                            Gold
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pink" value="Pink" />
                          <label className="form-control" for="Pink">
                            Pink
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="White" value="White" />
                          <label className="form-control" for="White">
                            White
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cyan" value="Cyan" />
                          <label className="form-control" for="Cyan">
                            Cyan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pastel" value="Pastel" />
                          <label className="form-control" for="Pastel">
                            Pastel
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Aquamarine"
                            value="Aquamarine"
                          />
                          <label className="form-control" for="Aquamarine">
                            Aquamarine
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Orange" value="Orange" />
                          <label className="form-control" for="Orange">
                            Orange
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Purple" value="Purple" />
                          <label className="form-control" for="Purple">
                            Purple
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Peach" value="Peach" />
                          <label className="form-control" for="Peach">
                            Peach
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Yellow" value="Yellow" />
                          <label className="form-control" for="Yellow">
                            Yellow
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Maroon" value="Maroon" />
                          <label className="form-control" for="Maroon">
                            Maroon
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="buildingType">
                      <h5>Building Type</h5>
                      <div className="simpleCheckbox">
                        <div className="singleCheckbox">
                          <input type="checkbox" id="Silver" value="Silver" />
                          <label className="form-control" for="Silver">
                            Silver
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Teal" value="Teal" />
                          <label className="form-control" for="Teal">
                            Teal
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Black" value="Black" />
                          <label className="form-control" for="Black">
                            Black
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Grey" value="Grey" />
                          <label className="form-control" for="Grey">
                            Grey
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neon" value="Neon" />
                          <label className="form-control" for="Neon">
                            Neon
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Tartan" value="Tartan" />
                          <label className="form-control" for="Tartan">
                            Tartan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Red" value="Red" />
                          <label className="form-control" for="Red">
                            Red
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Blue" value="Blue" />
                          <label className="form-control" for="Blue">
                            Blue
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Animal Print"
                            value="Animal Print"
                          />
                          <label className="form-control" for="Animal Print">
                            Animal Print
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Botanical"
                            value="Botanical"
                          />
                          <label className="form-control" for="Botanical">
                            Botanical
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cream" value="Cream" />
                          <label className="form-control" for="Cream">
                            Cream
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neutral" value="Neutral" />
                          <label className="form-control" for="Neutral">
                            Neutral
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Taupe" value="Taupe" />
                          <label className="form-control" for="Taupe">
                            Taupe
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Magenta" value="Magenta" />
                          <label className="form-control" for="Magenta">
                            Magenta
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Green" value="Green" />
                          <label className="form-control" for="Green">
                            Green
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Geometric"
                            value="Geometric"
                          />
                          <label className="form-control" for="Geometric">
                            Geometric
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Brown" value="Brown" />
                          <label className="form-control" for="Brown">
                            Brown
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Gold" value="Gold" />
                          <label className="form-control" for="Gold">
                            Gold
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pink" value="Pink" />
                          <label className="form-control" for="Pink">
                            Pink
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="White" value="White" />
                          <label className="form-control" for="White">
                            White
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cyan" value="Cyan" />
                          <label className="form-control" for="Cyan">
                            Cyan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pastel" value="Pastel" />
                          <label className="form-control" for="Pastel">
                            Pastel
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Aquamarine"
                            value="Aquamarine"
                          />
                          <label className="form-control" for="Aquamarine">
                            Aquamarine
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Orange" value="Orange" />
                          <label className="form-control" for="Orange">
                            Orange
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Purple" value="Purple" />
                          <label className="form-control" for="Purple">
                            Purple
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Peach" value="Peach" />
                          <label className="form-control" for="Peach">
                            Peach
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Yellow" value="Yellow" />
                          <label className="form-control" for="Yellow">
                            Yellow
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Maroon" value="Maroon" />
                          <label className="form-control" for="Maroon">
                            Maroon
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="designStyle">
                      <h5>Design Style</h5>
                      <div className="simpleCheckbox">
                        <div className="singleCheckbox">
                          <input type="checkbox" id="Silver" value="Silver" />
                          <label className="form-control" for="Silver">
                            Silver
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Teal" value="Teal" />
                          <label className="form-control" for="Teal">
                            Teal
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Black" value="Black" />
                          <label className="form-control" for="Black">
                            Black
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Grey" value="Grey" />
                          <label className="form-control" for="Grey">
                            Grey
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neon" value="Neon" />
                          <label className="form-control" for="Neon">
                            Neon
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Tartan" value="Tartan" />
                          <label className="form-control" for="Tartan">
                            Tartan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Red" value="Red" />
                          <label className="form-control" for="Red">
                            Red
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Blue" value="Blue" />
                          <label className="form-control" for="Blue">
                            Blue
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Animal Print"
                            value="Animal Print"
                          />
                          <label className="form-control" for="Animal Print">
                            Animal Print
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Botanical"
                            value="Botanical"
                          />
                          <label className="form-control" for="Botanical">
                            Botanical
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cream" value="Cream" />
                          <label className="form-control" for="Cream">
                            Cream
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Neutral" value="Neutral" />
                          <label className="form-control" for="Neutral">
                            Neutral
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Taupe" value="Taupe" />
                          <label className="form-control" for="Taupe">
                            Taupe
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Magenta" value="Magenta" />
                          <label className="form-control" for="Magenta">
                            Magenta
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Green" value="Green" />
                          <label className="form-control" for="Green">
                            Green
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Geometric"
                            value="Geometric"
                          />
                          <label className="form-control" for="Geometric">
                            Geometric
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Brown" value="Brown" />
                          <label className="form-control" for="Brown">
                            Brown
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Gold" value="Gold" />
                          <label className="form-control" for="Gold">
                            Gold
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pink" value="Pink" />
                          <label className="form-control" for="Pink">
                            Pink
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="White" value="White" />
                          <label className="form-control" for="White">
                            White
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Cyan" value="Cyan" />
                          <label className="form-control" for="Cyan">
                            Cyan
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Pastel" value="Pastel" />
                          <label className="form-control" for="Pastel">
                            Pastel
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input
                            type="checkbox"
                            id="Aquamarine"
                            value="Aquamarine"
                          />
                          <label className="form-control" for="Aquamarine">
                            Aquamarine
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Orange" value="Orange" />
                          <label className="form-control" for="Orange">
                            Orange
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Purple" value="Purple" />
                          <label className="form-control" for="Purple">
                            Purple
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Peach" value="Peach" />
                          <label className="form-control" for="Peach">
                            Peach
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Yellow" value="Yellow" />
                          <label className="form-control" for="Yellow">
                            Yellow
                          </label>
                        </div>

                        <div className="singleCheckbox">
                          <input type="checkbox" id="Maroon" value="Maroon" />
                          <label className="form-control" for="Maroon">
                            Maroon
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${"outerMain rules"} ${
                    isOpenList5 ? "" : "show"
                  }`}
                  id="rules"
                >
                  <h4 onClick={handleClickPopupList5}>House Rules</h4>
                  <div className="showContent">
                    <div className="houseRules">
                      <div className="selectBtns">
                        <div>
                          <input type="checkbox" id="13" value="13" />
                          <label className="allBtn border" for="13">
                            Any
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="14" value="14" />
                          <label className="allBtn border" for="14">
                            Animals Allowed
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="15" value="15" />
                          <label className="allBtn border" for="15">
                            Children Allowed
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="16" value="16" />
                          <label className="allBtn border" for="16">
                            Higher Noise Levels Allowed
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${"outerMain available-for"} ${
                    isOpenList6 ? "" : "show"
                  }`}
                  id="available-for"
                >
                  <h4 onClick={handleClickPopupList6}>Available For</h4>
                  <div className="showContent">
                    <div className="availableFor">
                      <div className="selectBtns">
                        <div>
                          <input type="checkbox" id="13" value="13" />
                          <label className="allBtn border" for="13">
                            Any
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="14" value="14" />
                          <label className="allBtn border" for="14">
                            Photoshoots
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="15" value="15" />
                          <label className="allBtn border" for="15">
                            Corporate Events
                          </label>
                        </div>
                        <div>
                          <input type="checkbox" id="16" value="16" />
                          <label className="allBtn border" for="16">
                            Higher Noise Levels Allowed
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filterSubmit">
                <button aria-label="submit-btn" type="submit" className="allBtn dark border">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FilterPopup;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../../../../public/assets/images/down-arrow.svg"
import styles from "./helpSection.module.scss";

function FaqContent() {
    const [openContent, setOpenContent] = useState(0);
  return (
    <div className={styles.helpSection + " helpSection"}>
       <div className="singleFilterContent">
            <div className={openContent == 1 ? "accordian openAccordion" : "accordian"} onClick={() => setOpenContent((openContent == 1) ? 0 : 1)} >
                <div className="accordionSummary">
                    <div className="typography">
                        <h4>FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur Adipiscing </h4>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </div>
                </div>
                <div className="accordionDetails">
                    <div className="accordioncontent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                    </div>
                </div>
            </div>
            <div className={openContent == 2 ? "accordian openAccordion" : "accordian"} onClick={() => setOpenContent((openContent == 2) ? 0 : 2)} >
                <div className="accordionSummary">
                    <div className="typography">
                        <h4>FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur Adipiscing </h4>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </div>
                </div>
                <div className="accordionDetails">
                    <div className="accordioncontent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                    </div>
                </div>
            </div>
            <div className={openContent == 3 ? "accordian openAccordion" : "accordian"} onClick={() => setOpenContent((openContent == 3) ? 0 : 3)} >
                <div className="accordionSummary">
                    <div className="typography">
                        <h4>FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur Adipiscing </h4>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </div>
                </div>
                <div className="accordionDetails">
                    <div className="accordioncontent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                    </div>
                </div>
            </div>
            <div className={openContent == 4 ? "accordian openAccordion" : "accordian"} onClick={() => setOpenContent((openContent == 4) ? 0 : 4)} >
                <div className="accordionSummary">
                    <div className="typography">
                        <h4>FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur Adipiscing </h4>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </div>
                </div>
                <div className="accordionDetails">
                    <div className="accordioncontent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                    </div>
                </div>
            </div>
            <div className={openContent == 5 ? "accordian openAccordion" : "accordian"} onClick={() => setOpenContent((openContent == 5) ? 0 : 5)} >
                <div className="accordionSummary">
                    <div className="typography">
                        <h4>FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur Adipiscing </h4>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </div>
                </div>
                <div className="accordionDetails">
                    <div className="accordioncontent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                    </div>
                </div>
            </div>
            <div className={openContent == 6 ? "accordian openAccordion" : "accordian"} onClick={() => setOpenContent((openContent == 6) ? 0 : 6)} >
                <div className="accordionSummary">
                    <div className="typography">
                        <h4>FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur Adipiscing </h4>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </div>
                </div>
                <div className="accordionDetails">
                    <div className="accordioncontent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                    </div>
                </div>
            </div>
            <div className={openContent == 7 ? "accordian openAccordion" : "accordian"} onClick={() => setOpenContent((openContent == 7) ? 0 : 7)} >
                <div className="accordionSummary">
                    <div className="typography">
                        <h4>FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur Adipiscing </h4>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </div>
                </div>
                <div className="accordionDetails">
                    <div className="accordioncontent">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </p>
                    </div>
                </div>
            </div>
            <button type="button" className="allBtn border dark">Load More</button>
        </div>
    </div>
  );
}

export default FaqContent;

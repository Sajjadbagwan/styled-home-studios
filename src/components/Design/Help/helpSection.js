"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DownArrow from "../../../../public/assets/images/down-arrow.svg"
import FaqContent from "@/components/Design/Help/faqContent";
import styles from "./helpSection.module.scss";

function HelpSection() {
    const [open, setOpen] = useState(0); 
    const [openContent, setOpenContent] = useState(0);
  return (
    <div className={styles.helpSection}>
      <div className="container">
            <div className="filterFaq">
                <h3>Filter By</h3>
                <ul>
                    <li className={open == 1 ? "filterTitle openFilterTitle" : "filterTitle"} onClick={() => setOpen((open ==   1) ? 0 : 1)}>
                        Option 1
                        <div className="checkboxDiv">
                            <input id="Category1" type="checkbox" name="Category1"/>
                            <label className="form-control" htmlFor="Category1">
                                Category 1
                            </label>
                            <ul>
                                <li>
                                    <input id="Child Category1" type="checkbox" name="Child Category1"/>
                                    <label className="form-control" htmlFor="Child Category1">
                                        Child Category 1
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category2" type="checkbox" name="Child Category2"/>
                                    <label className="form-control" htmlFor="Child Category2">
                                        Child Category 2
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category3" type="checkbox" name="Child Category3"/>
                                    <label className="form-control" htmlFor="Child Category3">
                                        Child Category 3
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category4" type="checkbox" name="Child Category4"/>
                                    <label className="form-control" htmlFor="Child Category4">
                                        Child Category 4
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="checkboxDiv">
                            <input id="Category2" type="checkbox" name="Category2"/>
                            <label className="form-control" htmlFor="Category2">
                                Category 2
                            </label>
                            <ul>
                                <li>
                                    <input id="Child Category5" type="checkbox" name="Child Category5"/>
                                    <label className="form-control" htmlFor="Child Category5">
                                        Child Category 5
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category6" type="checkbox" name="Child Category6"/>
                                    <label className="form-control" htmlFor="Child Category6">
                                        Child Category 6
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category7" type="checkbox" name="Child Category7"/>
                                    <label className="form-control" htmlFor="Child Category7">
                                        Child Category 7
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category8" type="checkbox" name="Child Category8"/>
                                    <label className="form-control" htmlFor="Child Category8">
                                        Child Category 8
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </li>
                    <li className={open == 2 ? "filterTitle openFilterTitle" : "filterTitle"} onClick={() => setOpen((open ==   2) ? 0 : 2)}>
                        Option 2
                        <div className="checkboxDiv">
                            <input id="Category21" type="checkbox" name="Category21"/>
                            <label className="form-control" htmlFor="Category21">
                                Category 21
                            </label>
                            <ul>
                                <li>
                                    <input id="Child Category22" type="checkbox" name="Child Category22"/>
                                    <label className="form-control" htmlFor="Child Category22">
                                        Child Category 22
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category23" type="checkbox" name="Child Category23"/>
                                    <label className="form-control" htmlFor="Child Category23">
                                        Child Category 23
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category24" type="checkbox" name="Child Category24"/>
                                    <label className="form-control" htmlFor="Child Category24">
                                        Child Category 24
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category25" type="checkbox" name="Child Category25"/>
                                    <label className="form-control" htmlFor="Child Category25">
                                        Child Category 25
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="checkboxDiv">
                            <input id="Category31" type="checkbox" name="Category31"/>
                            <label className="form-control" htmlFor="Category31">
                                Category 31
                            </label>
                            <ul>
                                <li>
                                    <input id="Child Category22" type="checkbox" name="Child Category22"/>
                                    <label className="form-control" htmlFor="Child Category22">
                                        Child Category 32
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category23" type="checkbox" name="Child Category23"/>
                                    <label className="form-control" htmlFor="Child Category23">
                                        Child Category 23
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category24" type="checkbox" name="Child Category24"/>
                                    <label className="form-control" htmlFor="Child Category24">
                                        Child Category 24
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category25" type="checkbox" name="Child Category25"/>
                                    <label className="form-control" htmlFor="Child Category25">
                                        Child Category 25
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </li>
                    <li className={open == 3 ? "filterTitle openFilterTitle" : "filterTitle"} onClick={() => setOpen((open ==   3) ? 0 : 3)}>
                        Option 3
                        <div className="checkboxDiv">
                            <input id="Category43" type="checkbox" name="Category43"/>
                            <label className="form-control" htmlFor="Category43">
                                Category 43
                            </label>
                            <ul>
                                <li>
                                    <input id="Child Category44" type="checkbox" name="Child Category44"/>
                                    <label className="form-control" htmlFor="Child Category44">
                                        Child Category 44
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category45" type="checkbox" name="Child Category45"/>
                                    <label className="form-control" htmlFor="Child Category45">
                                        Child Category 45
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category46" type="checkbox" name="Child Category46"/>
                                    <label className="form-control" htmlFor="Child Category46">
                                        Child Category 46
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category47" type="checkbox" name="Child Category47"/>
                                    <label className="form-control" htmlFor="Child Category47">
                                        Child Category 47
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="checkboxDiv">
                            <input id="Category53" type="checkbox" name="Category53"/>
                            <label className="form-control" htmlFor="Category53">
                                Category 53
                            </label>
                            <ul>
                                <li>
                                    <input id="Child Category54" type="checkbox" name="Child Category54"/>
                                    <label className="form-control" htmlFor="Child Category54">
                                        Child Category 54
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category55" type="checkbox" name="Child Category55"/>
                                    <label className="form-control" htmlFor="Child Category55">
                                        Child Category 55
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category56" type="checkbox" name="Child Category56"/>
                                    <label className="form-control" htmlFor="Child Category56">
                                        Child Category 56
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category57" type="checkbox" name="Child Category57"/>
                                    <label className="form-control" htmlFor="Child Category57">
                                        Child Category 57
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </li>
                    <li className={open == 4 ? "filterTitle openFilterTitle" : "filterTitle"} onClick={() => setOpen((open ==   4) ? 0 : 4)}>
                        Option 4
                        <div className="checkboxDiv">
                            <input id="Category4" type="checkbox" name="Category4"/>
                            <label className="form-control" htmlFor="Category4">
                                Category 4
                            </label>
                            <ul>
                                <li>
                                    <input id="Child Category1" type="checkbox" name="Child Category1"/>
                                    <label className="form-control" htmlFor="Child Category1">
                                        Child Category 1
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category2" type="checkbox" name="Child Category2"/>
                                    <label className="form-control" htmlFor="Child Category2">
                                        Child Category 2
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category3" type="checkbox" name="Child Category3"/>
                                    <label className="form-control" htmlFor="Child Category3">
                                        Child Category 3
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category4" type="checkbox" name="Child Category4"/>
                                    <label className="form-control" htmlFor="Child Category4">
                                        Child Category 4
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="checkboxDiv">
                            <input id="Category64" type="checkbox" name="Category64"/>
                            <label className="form-control" htmlFor="Category64">
                                Category 64
                            </label>
                            <ul>
                                <li>
                                    <input id="Child Category65" type="checkbox" name="Child Category65"/>
                                    <label className="form-control" htmlFor="Child Category65">
                                        Child Category 65
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category66" type="checkbox" name="Child Category66"/>
                                    <label className="form-control" htmlFor="Child Category66">
                                        Child Category 66
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category67" type="checkbox" name="Child Category67"/>
                                    <label className="form-control" htmlFor="Child Category67">
                                        Child Category 67
                                    </label>
                                </li>
                                <li>
                                    <input id="Child Category68" type="checkbox" name="Child Category68"/>
                                    <label className="form-control" htmlFor="Child Category68">
                                        Child Category 68
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <button type="button">
                            <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="filterContent">
                <FaqContent />
            </div>
      </div>
    </div>
  );
}

export default HelpSection;

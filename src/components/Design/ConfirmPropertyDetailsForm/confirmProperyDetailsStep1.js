"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InstaIcon from "../../../../public/assets/images/insta-white.svg"
import Image1 from "../../../../public/assets/images/color-1.png"
import Image2 from "../../../../public/assets/images/color-2.png"
import Image3 from "../../../../public/assets/images/color-3.png"
import Image4 from "../../../../public/assets/images/color-4.png"
import Image5 from "../../../../public/assets/images/color-5.png"
import styles from "./confirmPropertyDetailsForm.module.scss";

function ConfirmPropertyDetailsStep1() {
  
  return (
    <div className={styles.confirmPropertyDetailsStep1}>
      <div className="formDiv">
        <div className="formDetails">           
            <h2>Step 1 Property Details - Please Enter Below</h2>
            <p>Please check the details your previously entered and fill out any new information.</p>
            <div className="inputGroup">
                <div className="halfInput">
                <input type="text" name="property-name" placeholder="Property Name*" />
                </div>
                <div className="halfInput">
                <input type="text" name="property-pcode" placeholder="Property Postcode*" />
                </div>
            </div>
            <div className="inputGroup">
                <textarea name="desc" placeholder="Property Description (Please describe your property in as much detail as possible)"></textarea>
            </div>
            <hr/>
            <div className="imageSection">
                <h2>Images*</h2>
                <p>(Please drag them into the order you sit to use. The First will be the featured image.)</p>
                <p>Minimum of 5 images, please.</p>
                {/* <input type="file" accept="image/png, image/jpeg" name="image" multiple/> */}
                <div className="imageBox">
                    <ul>
                        <li>
                            <Link href="">
                                <Image src={Image1} alt="image1" height={267} width={267} />
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <Image src={Image2} alt="image2" height={267} width={267} />
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <Image src={Image3} alt="image3" height={267} width={267} />
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <Image src={Image4} alt="image4" height={267} width={267} />
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <Image src={Image5} alt="image5" height={267} width={267} />
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="aboutYou">
                <h2>About You</h2>
                <div className="inputGroup instaGroup">
                    <div className="halfInput">
                    <span><Image src={InstaIcon} height={16} width={16} alt="insta-icon"/></span>
                    <input type="text" name="iusername" placeholder="@ Instagram Username" />
                    </div>
                    <div className="halfInput"></div>
                </div>
                <div className="inputGroup">
                    <div className="halfInput">
                    <input type="text" name="Address1" placeholder="Address Line 1" />
                    </div>
                    <div className="halfInput">
                    <input type="text" name="Address2" placeholder="Address Line 2" />
                    </div>
                </div>
                <div className="inputGroup">
                    <div className="halfInput">
                    <input type="text" name="town" placeholder="Town" />
                    </div>
                    <div className="halfInput">
                    <input type="text" name="county" placeholder="County" />
                    </div>
                </div>
                <hr />
            </div>
            <div className="button-container">
                <Link href="" className="save-come">Save Progress And Come Back Later</Link>
                <button type="button" className="allBtn dark">Next</button>
            </div>          
        </div>
      </div>
    </div>
  );
}

export default ConfirmPropertyDetailsStep1;

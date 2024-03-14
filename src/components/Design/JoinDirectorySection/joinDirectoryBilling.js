"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import JoinDirectoryPopup from "@/components/Design/CommonPopup/joinDirectoryPopup";
import DeclineProp from "../../../../public/assets/images/decline-prop.svg"
import CardIcon from "../../../../public/assets/images/card.svg"
import styles from "./joinDirectorySection.module.scss";

function JoinDirectoryBilling() {
    const [JoinDirectoryTermsPopupIsOpen, SetJoinDirectoryTermsPopupIsOpen] = useState(false);
  const openJoinDirectoryTermsPopup = () => {
    SetJoinDirectoryTermsPopupIsOpen(true);
  };
  const closeJoinDirectoryTermsPopup = () => {
    SetJoinDirectoryTermsPopupIsOpen(false);
  };
  
  return (
    <div className={styles.joinDirectoryBilling + " joinDirectoryBilling"}>
        <div className="formDetails">
            <h2>Please Enter You Billing Information</h2>
            <div className="messageInfo">
                <div className="reason">
                    <Image src={DeclineProp} alt="question" height={41} width={41} />
                    <div className="warningDiv">
                        <h3>You Will Not Be Charged Until Your Service Is Approved By Our Team</h3>
                    </div>
                </div>
            </div>            
            <form>
                <div className="radioDiv">
                    <div className="singleCheckbox">
                        <input id="month" type="radio" name="Pay"/>
                        <label className="form-control" htmlFor="month">
                            Pay Monthly £30
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="year" type="radio" name="Pay"/>
                        <label className="form-control" htmlFor="year">
                            Pay Yearly £270 <br/>
                            <span>Save 10%</span>
                        </label>
                    </div>
                </div>
                <hr/>
                <h3>Billing Address</h3>
                <div className="inputGroup">
                    <input type="text" name="address" placeholder="Start typing your address…" />         
                </div>
                <div className="inputGroup">
                    <input type="text" name="house" placeholder="House Name/ Number*" />
                </div>
                <div className="inputGroup">
                    <input type="text" name="aline2" placeholder="Address Line 2" />
                </div>
                <div className="inputGroup">
                    <input type="text" name="aline3" placeholder="Address Line 3" />
                </div>
                <div className="inputGroup">
                    <input type="text" name="town" placeholder="Town/City*" />
                </div>
                <div className="inputGroup">
                    <input type="text" name="pcode" placeholder="Postcode*" />
                </div>
                <hr/>
                <h3>Voucher Code</h3>
                <div className="voucherCode">
                    <div className="inputGroup">
                        <input type="text" name="vcode" placeholder="Voucher Code" />
                    </div>
                    <button aria-label="apply-btn" type="button" className="allBtn dark border">Apply</button>
                </div>
                <hr/>
                <h3>Payment Information <Image src={CardIcon} height={30} width={140} alt="card" /></h3>
                <div className="inputGroup">
                    <input type="text" name="cname" placeholder="Card Name*" />
                </div>
                <div className="inputGroup">
                    <input type="text" name="cnumber" placeholder="Card Number*" />
                </div>
                <div className="cardDetails">
                    <div className="inputGroup">
                        <input type="text" name="emonth" placeholder="Expiry Month*" />
                    </div>
                    <div className="inputGroup">
                        <input type="text" name="eyear" placeholder="Expiry Year*" />
                    </div>
                    <div className="inputGroup">
                        <input type="text" name="cv" placeholder="CV2*" />
                    </div>
                </div>
                <hr/>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="terms" type="checkbox" name="terms"/>
                        <label className="form-control" htmlFor="terms">
                            I agree to the <button type="button" onClick={openJoinDirectoryTermsPopup}>Terms & Conditions</button>
                        </label>
                    </div>
                </div>
                <hr/>
                <div className="buttonContainer">
                    <Link href="" className="save-come">Save Progress And Come Back Later</Link>
                    <button aria-label="previous-btn" type="button" className="allBtn border">Previous Page</button>
                    <button aria-label="submit-btn" type="button" className="allBtn dark">Submit</button>
                </div>     
                <JoinDirectoryPopup JoinDirectoryTermsPopupIsOpen={JoinDirectoryTermsPopupIsOpen} closeJoinDirectoryTermsPopup={closeJoinDirectoryTermsPopup}/>
            </form>            
        </div>
    </div>
  );
}

export default JoinDirectoryBilling;

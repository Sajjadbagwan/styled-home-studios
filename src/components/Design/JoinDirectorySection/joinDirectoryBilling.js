"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DeclineProp from "../../../../public/assets/images/decline-prop.svg"
import CardIcon from "../../../../public/assets/images/card.svg"
import styles from "./joinDirectorySection.module.scss";

function JoinDirectoryBilling() {
  
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
                <h2>Billing Address</h2>
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
                <h2>Voucher Code</h2>
                <div className="voucherCode">
                    <div className="inputGroup">
                        <input type="text" name="vcode" placeholder="Voucher Code" />
                    </div>
                    <button type="button" className="allBtn dark border">Apply</button>
                </div>
                <hr/>
                <h2>Payment Information <Image src={CardIcon} height={30} width={140} alt="card" /></h2>
                <hr/>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="terms" type="checkbox" name="terms"/>
                        <label className="form-control" htmlFor="terms">
                            I agree to the <Link href="">Terms & Conditions</Link>
                        </label>
                    </div>
                </div>
                <hr/>
                <div className="buttonContainer">
                    <Link href="" className="save-come">Save Progress And Come Back Later</Link>
                    <button type="button" className="allBtn border">Previous Page</button>
                    <button type="button" className="allBtn dark">Submit</button>
                </div>     
            </form>
            
        </div>
    </div>
  );
}

export default JoinDirectoryBilling;

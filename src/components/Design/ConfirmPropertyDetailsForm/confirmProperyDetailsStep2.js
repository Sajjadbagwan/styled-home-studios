"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import InfoIcon from "../../../../public/assets/images/question-mark.svg"
import styles from "./confirmPropertyDetailsForm.module.scss";

function ConfirmPropertyDetailsStep2() {
     
  return (
    <div className={styles.confirmPropertyDetailsStep2 + " commonSteps"}>
      <div className="formDiv">
        <div className="formDetails">           
            <h2>Step 2 Pricing And Availability - Please Enter Details Below</h2>
            <p>Please check the details your previously entered and fill out any new information.</p>
            <div className="inputGroup">
                <div className="halfInput">
                    <input type="text" name="property-name" placeholder="Hourly Rate* (£)" />
                </div>
            </div>
            <p>Your hourly rate should reflect your experience as a host and the amount of your property that you are making available. You can adjust your hourly rate at any time. If you are VAT registered, make sure to factor this into your hourly rate.</p>
            <input id="offer" type="checkbox" name="for-category"/>
            <label className="form-control" htmlFor="offer">
                Offer a 10% discount on full day booking (8 hours)?
            </label>
            <hr/>
            <div className="commonSection">
                <h3>Tax</h3>
                <p>I agree to pay my own TAX. <span><Image src={InfoIcon} alt="infoicon" height={14} width={14}/>Why do we need this information?</span></p>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="yes" type="radio" name="Yes"/>
                        <label className="form-control" htmlFor="yes">
                            Yes
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="no" type="radio" name="Yes"/>
                        <label className="form-control" htmlFor="no">
                            No
                        </label>
                    </div>
                </div>
                <div className="inputGroup">
                    <div className="halfInput">
                        <input type="number" name="vat" placeholder="VAT Number*"/>
                    </div>
                </div>         
            </div>
            <hr />
            <div className="commonSection">
                <h3>Days Of The Week You Accept Bookings For.</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="monday" type="checkbox" name="monday"/>
                        <label className="form-control" htmlFor="monday">
                            Monday
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="tuesday" type="checkbox" name="tuesday"/>
                        <label className="form-control" htmlFor="tuesday">
                            Tuesday
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="wednesday" type="checkbox" name="wednesday"/>
                        <label className="form-control" htmlFor="wednesday">
                            Wednesday
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="thursday" type="checkbox" name="thursday"/>
                        <label className="form-control" htmlFor="thursday">
                            Thursday
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="friday" type="checkbox" name="friday"/>
                        <label className="form-control" htmlFor="friday">
                            Friday
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="saturday" type="checkbox" name="saturday"/>
                        <label className="form-control" htmlFor="saturday">
                            Saturday
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="sunday" type="checkbox" name="sunday"/>
                        <label className="form-control" htmlFor="sunday">
                            Sunday
                        </label>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="commonSection">
                <h3>What Is The Minimum Amount Of Hours You Can Make A Booking For At Your Property?</h3>
                <div className="hourDiv">
                    <div className="inputGroup">
                        <div className="halfInput">
                            <input type="number" name="hours" placeholder="2"/>
                            <span>Hours</span>
                        </div>
                    </div>                    
                </div>                
            </div>
            <hr/>
            <div className="commonSection">
                <h3>Would You Like To Accept Corporate Event Bookings?</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="cyes" type="radio" name="Yes"/>
                        <label className="form-control" htmlFor="cyes">
                            Yes
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="cno" type="radio" name="Yes"/>
                        <label className="form-control" htmlFor="cno">
                            No
                        </label>
                    </div>
                </div>  
            </div>
            <hr/>
            <div className="button-container">
                <Link href="" className="save-come">Save Progress And Come Back Later</Link>
                <button type="button" className="allBtn border">Previous Page</button>
                <button type="button" onClick={() => props.setShow(true)} className="allBtn dark">Next</button>
            </div>          
        </div>
      </div>
    </div>
  );
}

export default ConfirmPropertyDetailsStep2;

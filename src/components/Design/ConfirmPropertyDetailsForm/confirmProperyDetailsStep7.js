"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./confirmPropertyDetailsForm.module.scss";

function ConfirmPropertyDetailsStep7() {
    
  return (
    <div className={styles.confirmPropertyDetailsStep7 + " commonSteps"}>
      <div className="formDiv">
        <div className="formDetails">           
            <h2>Step 7: House Rules</h2>
            <p>Please tick below which are relevant to your property.</p>
            <div className="commonSection houseRules">
                <h3>House Rules</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="animals" type="checkbox" name="animals"/>
                        <label className="form-control" htmlFor="animals">
                            No animals allowed
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="children" type="checkbox" name="children"/>
                        <label className="form-control" htmlFor="children">
                            No children allowed
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="sparking" type="checkbox" name="sparking"/>
                        <label className="form-control" htmlFor="sparking">
                            Meter street parking
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="rubbish" type="checkbox" name="rubbish"/>
                        <label className="form-control" htmlFor="rubbish">
                            No rubbish left on the street / in front of the house
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="shoes" type="checkbox" name="shoes"/>
                        <label className="form-control" htmlFor="shoes">
                            Shoes removed inside the property
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="furniture" type="checkbox" name="furniture"/>
                        <label className="form-control" htmlFor="furniture">
                            Please return all furniture / props to the correct room / rebuild where necessary
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="designated" type="checkbox" name="designated"/>
                        <label className="form-control" htmlFor="designated">
                            No food to be consumed outside of designated areas
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="protect" type="checkbox" name="protect"/>
                        <label className="form-control" htmlFor="protect">
                            Please protect the flooring & lift all furniture
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="smoking" type="checkbox" name="smoking"/>
                        <label className="form-control" htmlFor="smoking">
                            No smoking inside the property
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="swimming" type="checkbox" name="swimming"/>
                        <label className="form-control" htmlFor="swimming">
                            Use of swimming pool by special permission and at own risk
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="alcohol" type="checkbox" name="alcohol"/>
                        <label className="form-control" htmlFor="alcohol">
                            No unauthorised alcohol allowed on property
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="neighbours" type="checkbox" name="neighbours"/>
                        <label className="form-control" htmlFor="neighbours">
                            Please keep noise to an acceptable level & respect our neighbours
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="crew" type="checkbox" name="crew"/>
                        <label className="form-control" htmlFor="crew">
                            Crew only on site
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="clean" type="checkbox" name="clean"/>
                        <label className="form-control" htmlFor="clean">
                            Please leave the house as found - clean & tidy
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="everything" type="checkbox" name="everything"/>
                        <label className="form-control" htmlFor="everything">
                            Please take everything home with you
                        </label>
                    </div>
                </div>     
            </div>
            <hr />
            <div className="commonSection">
                <h3>ADDITIONAL HOUSE RULES</h3>  
                <p>Please enter any additional house rules you may have. These will be added to the list above and will be preselected when submitted.</p>              
                <div className="inputGroup">
                    <input type="text" name="smoke-detail" placeholder="No smoking on the property"/>
                    <button aria-label="submit" type="submit" className="allBtn dark">Submit</button>
                </div>         
            </div>
            <hr/>
            <div className="button-container">
                <Link href="" className="save-come">Save Progress And Come Back Later</Link>
                <button aria-label="previous-btn" type="button" className="allBtn border">Previous Page</button>
                <button aria-label="approval" type="button" className="allBtn dark">Submit for approval</button>
            </div>             
        </div>
      </div>
    </div>
  );
}

export default ConfirmPropertyDetailsStep7;

"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./confirmPropertyDetailsForm.module.scss";

function ConfirmPropertyDetailsStep6() {
    
  return (
    <div className={styles.confirmPropertyDetailsStep6 + " commonSteps"}>
      <div className="formDiv">
        <div className="formDetails">           
            <h2>Step 6: Amenities</h2>
            <p>Please tick below which are relevant to your property.</p>
            <div className="commonSection">
                <h3>Parking</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="freeonsite" type="radio" name="parking"/>
                        <label className="form-control" htmlFor="freeonsite">
                            Free onsite parking
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="freestreet" type="radio" name="parking"/>
                        <label className="form-control" htmlFor="freestreet">
                            Free street parking
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="meterparking" type="radio" name="parking"/>
                        <label className="form-control" htmlFor="meterparking">
                            Meter street parking
                        </label>
                    </div>
                </div>
                <div className="inputGroup">
                    <input type="text" name="park-details" placeholder="More details on parking"/>
                </div>         
            </div>
            <hr />
            <div className="commonSection lightingSection">
                <h3>Lighting</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="natural" type="radio" name="lighting"/>
                        <label className="form-control" htmlFor="natural">
                            Abundant natural lighting
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="blackout" type="radio" name="lighting"/>
                        <label className="form-control" htmlFor="blackout">
                            Blackout blinds / natural light can be blocked out 
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="nfacing" type="radio" name="lighting"/>
                        <label className="form-control" htmlFor="nfacing">
                            North facing
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="sfacing" type="radio" name="lighting"/>
                        <label className="form-control" htmlFor="sfacing">
                            South facing
                        </label>
                    </div>
                </div>
                <div className="inputGroup">
                    <input type="text" name="light-details" placeholder="More details on lighting"/>
                </div>         
            </div>
            <hr/>
            <div className="commonSection">
                <h3>Sound</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="wheelchair" type="checkbox" name="wheelchair"/>
                        <label className="form-control" htmlFor="wheelchair">
                            Wheelchair accessible
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="ramps" type="checkbox" name="ramps"/>
                        <label className="form-control" htmlFor="ramps">
                            Ramps available
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="lift" type="checkbox" name="lift"/>
                        <label className="form-control" htmlFor="lift">
                            Lift available
                        </label>
                    </div>
                </div>
                <div className="inputGroup">
                    <input type="text" name="park-details" placeholder="More details on sound"/>
                </div>         
            </div>
            <hr/>
            <div className="commonSection lightingSection">
                <h3>Amenities</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="wifi" type="checkbox" name="wifi"/>
                        <label className="form-control" htmlFor="wifi">
                            Wifi
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="tea" type="checkbox" name="tea"/>
                        <label className="form-control" htmlFor="tea">
                            Tea & coffee
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="equipment" type="checkbox" name="equipment"/>
                        <label className="form-control" htmlFor="equipment">
                            Lighting equipment
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="backdrop" type="checkbox" name="backdrop"/>
                        <label className="form-control" htmlFor="backdrop">
                            White backdrop
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="rail" type="checkbox" name="rail"/>
                        <label className="form-control" htmlFor="rail">
                            Wardrobe rail
                        </label>
                    </div>
                </div>
                <div className="inputGroup">
                    <input type="text" name="light-details" placeholder="More details on amenities"/>
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

export default ConfirmPropertyDetailsStep6;

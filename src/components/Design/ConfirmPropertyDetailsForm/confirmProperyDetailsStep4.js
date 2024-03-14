"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import InfoIcon from "../../../../public/assets/images/question-mark.svg"
import styles from "./confirmPropertyDetailsForm.module.scss";

function ConfirmPropertyDetailsStep4() {
     
  return (
    <div className={styles.confirmPropertyDetailsStep4 + " commonSteps"}>
      <div className="formDiv">
        <div className="formDetails">           
            <h2>Step 4: Style</h2>
            <p>Please tick below which are relevant to your property.</p>
            <div className="commonSection">
                <h3>Building Period</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="gothic" type="checkbox" name="gothic"/>
                        <label className="form-control" htmlFor="gothic">
                            Medieval & Gothic
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="edward" type="checkbox" name="edward"/>
                        <label className="form-control" htmlFor="edward">
                            Edwardian
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="new" type="checkbox" name="new"/>
                        <label className="form-control" htmlFor="new">
                            New Build
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="tudor" type="checkbox" name="tudor"/>
                        <label className="form-control" htmlFor="tudor">
                            Tudor & Elizabethan
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="twenty" type="checkbox" name="twenty"/>
                        <label className="form-control" htmlFor="twenty">
                            Twenties & Thirties
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="george" type="checkbox" name="george"/>
                        <label className="form-control" htmlFor="george">
                            Georgian & Regency
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="sixties" type="checkbox" name="sixties"/>
                        <label className="form-control" htmlFor="sixties">
                            Sixties & Seventies
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="victoria" type="checkbox" name="victoria"/>
                        <label className="form-control" htmlFor="victoria">
                            Victorian
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="modern" type="checkbox" name="modern"/>
                        <label className="form-control" htmlFor="modern">
                            Modern
                        </label>
                    </div>
                </div>
            </div>
            <hr />
            <div className="commonSection">
                <h3>Building Type</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="listed" type="checkbox" name="listed"/>
                        <label className="form-control" htmlFor="listed">
                            Listed & Conservation
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="cottage" type="checkbox" name="cottage"/>
                        <label className="form-control" htmlFor="cottage">
                            Cottage
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="flat" type="checkbox" name="flat"/>
                        <label className="form-control" htmlFor="flat">
                            Flat
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="mansion" type="checkbox" name="mansion"/>
                        <label className="form-control" htmlFor="mansion">
                            Mansion
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="terraced" type="checkbox" name="terraced"/>
                        <label className="form-control" htmlFor="terraced">
                            Terraced House
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="barn" type="checkbox" name="barn"/>
                        <label className="form-control" htmlFor="barn">
                            Barn
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="detached" type="checkbox" name="detached"/>
                        <label className="form-control" htmlFor="detached">
                            Detached
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="boat" type="checkbox" name="boat"/>
                        <label className="form-control" htmlFor="boat">
                            House Boat
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="mews" type="checkbox" name="mews"/>
                        <label className="form-control" htmlFor="mews">
                            Mews
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="warehouse" type="checkbox" name="warehouse"/>
                        <label className="form-control" htmlFor="warehouse">
                            Warehouse
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="beach" type="checkbox" name="beach"/>
                        <label className="form-control" htmlFor="beach">
                            Beach House
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="eco" type="checkbox" name="eco"/>
                        <label className="form-control" htmlFor="eco">
                            Eco House
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="maisonette" type="checkbox" name="maisonette"/>
                        <label className="form-control" htmlFor="maisonette">
                            Maisonette
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="newbuild" type="checkbox" name="newbuild"/>
                        <label className="form-control" htmlFor="newbuild">
                            New Build
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="townhouse" type="checkbox" name="townhouse"/>
                        <label className="form-control" htmlFor="townhouse">
                            Townhouse
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="bungalow" type="checkbox" name="bungalow"/>
                        <label className="form-control" htmlFor="bungalow">
                            Bungalow
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="terrace" type="checkbox" name="terrace"/>
                        <label className="form-control" htmlFor="terrace">
                            End of Terrace
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="manor" type="checkbox" name="manor"/>
                        <label className="form-control" htmlFor="manor">
                            Manor House
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="detached" type="checkbox" name="detached"/>
                        <label className="form-control" htmlFor="detached">
                            Semi-Detached
                        </label>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="commonSection designStyle">
                <h3>Design Style</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="tinghome" type="checkbox" name="tinghome"/>
                        <label className="form-control" htmlFor="tinghome">
                            Ting Home
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="country" type="checkbox" name="country"/>
                        <label className="form-control" htmlFor="country">
                            Country House
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="contemporary" type="checkbox" name="contemporary"/>
                        <label className="form-control" htmlFor="contemporary">
                            Contemporary
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="feminine" type="checkbox" name="feminine"/>
                        <label className="form-control" htmlFor="feminine">
                            Feminine
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="industrial" type="checkbox" name="industrial"/>
                        <label className="form-control" htmlFor="industrial">
                            Industrial
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="minimalist" type="checkbox" name="minimalist"/>
                        <label className="form-control" htmlFor="minimalist">
                            Minimalist
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="art" type="checkbox" name="art"/>
                        <label className="form-control" htmlFor="art">
                            Art Nouveau
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="retro" type="checkbox" name="retro"/>
                        <label className="form-control" htmlFor="retro">
                            Retro
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="masculine" type="checkbox" name="masculine"/>
                        <label className="form-control" htmlFor="masculine">
                            Masculine
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="farm" type="checkbox" name="farm"/>
                        <label className="form-control" htmlFor="farm">
                            Farm House
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="urban" type="checkbox" name="urban"/>
                        <label className="form-control" htmlFor="urban">
                            Urban
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="elegant" type="checkbox" name="elegant"/>
                        <label className="form-control" htmlFor="elegant">
                            Elegant
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="willam" type="checkbox" name="willam"/>
                        <label className="form-control" htmlFor="willam">
                            Willam Morris
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="vintage" type="checkbox" name="vintage"/>
                        <label className="form-control" htmlFor="vintage">
                            Vintage
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="rustic" type="checkbox" name="rustic"/>
                        <label className="form-control" htmlFor="rustic">
                            Rustic
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="geometric" type="checkbox" name="geometric"/>
                        <label className="form-control" htmlFor="geometric">
                            Geometric
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="scandi" type="checkbox" name="scandi"/>
                        <label className="form-control" htmlFor="scandi">
                            Scandi
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="newengland" type="checkbox" name="newengland"/>
                        <label className="form-control" htmlFor="newengland">
                            New England
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="queenanne" type="checkbox" name="queenanne"/>
                        <label className="form-control" htmlFor="queenanne">
                            Queen Anne
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="mid-century" type="checkbox" name="mid-century"/>
                        <label className="form-control" htmlFor="mid-century">
                            Mid-Century
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="traditional" type="checkbox" name="traditional"/>
                        <label className="form-control" htmlFor="traditional">
                            Traditional
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="coastal" type="checkbox" name="coastal"/>
                        <label className="form-control" htmlFor="coastal">
                            Coastal
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="monochrome" type="checkbox" name="monochrome"/>
                        <label className="form-control" htmlFor="monochrome">
                            Monochrome
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="shabbychic" type="checkbox" name="shabbychic"/>
                        <label className="form-control" htmlFor="shabbychic">
                            Shabby Chic
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="french" type="checkbox" name="french"/>
                        <label className="form-control" htmlFor="french">
                            French
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="boho" type="checkbox" name="boho"/>
                        <label className="form-control" htmlFor="boho">
                            Boho
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="artdeco" type="checkbox" name="artdeco"/>
                        <label className="form-control" htmlFor="artdeco">
                            Art Deco
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="eclectic" type="checkbox" name="eclectic"/>
                        <label className="form-control" htmlFor="eclectic">
                            Eclectic
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="maxamilist" type="checkbox" name="maxamilist"/>
                        <label className="form-control" htmlFor="maxamilist">
                            Maxamilist
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="neoclassical" type="checkbox" name="neoclassical"/>
                        <label className="form-control" htmlFor="neoclassical">
                            Neo-Classical
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="luxury" type="checkbox" name="luxury"/>
                        <label className="form-control" htmlFor="luxury">
                            Luxury
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="mediterranean" type="checkbox" name="mediterranean"/>
                        <label className="form-control" htmlFor="mediterranean">
                            Mediterranean
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="colourful" type="checkbox" name="colourful"/>
                        <label className="form-control" htmlFor="colourful">
                            Colourful
                        </label>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="button-container">
                <Link href="" className="save-come">Save Progress And Come Back Later</Link>
                <button aria-label="previous-btn" type="button" className="allBtn border">Previous Page</button>
                <button aria-label="next-btn" type="button" className="allBtn dark">Next</button>
            </div>          
        </div>
      </div>
    </div>
  );
}

export default ConfirmPropertyDetailsStep4;

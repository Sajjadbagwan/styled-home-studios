"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import InfoIcon from "../../../../public/assets/images/question-mark.svg"
import styles from "./confirmPropertyDetailsForm.module.scss";

function ConfirmPropertyDetailsStep3() {
     
  return (
    <div className={styles.confirmPropertyDetailsStep3 + " commonSteps"}>
      <div className="formDiv">
        <div className="formDetails">           
            <h2>Step 3: Spacing</h2>
            <p>Please check the details your previously entered and fill out any new information.</p>
            <div className="commonSection">
                <h3>Indoor Spaces</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="option" type="checkbox" name="option"/>
                        <label className="form-control" htmlFor="option">
                            option
                        </label>
                        <div className="hideDiv">
                            <div className="inputGroup">
                                <div className="halfDiv">
                                    <input type="number" name="rnumber" placeholder="QTY"/>
                                    <button aria-label="submit" type="button" className="allBtn dark">Submit</button>
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option1" type="checkbox" name="option1"/>
                        <label className="form-control" htmlFor="option1">
                            option1
                        </label>
                        <div className="hideDiv">
                            <div className="inputGroup">
                                <div className="halfDiv">
                                    <input type="number" name="rnumber" placeholder="QTY"/>
                                    <button aria-label="submit" type="button" className="allBtn dark">Submit</button>
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option2" type="checkbox" name="option2"/>
                        <label className="form-control" htmlFor="option2">
                            option2
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option3" type="checkbox" name="option3"/>
                        <label className="form-control" htmlFor="option3">
                            option3
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option4" type="checkbox" name="option4"/>
                        <label className="form-control" htmlFor="option4">
                            option4
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option5" type="checkbox" name="option5"/>
                        <label className="form-control" htmlFor="option5">
                            option5
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option6" type="checkbox" name="option6"/>
                        <label className="form-control" htmlFor="option6">
                            option6
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option7" type="checkbox" name="option7"/>
                        <label className="form-control" htmlFor="option7">
                            option7
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option8" type="checkbox" name="option8"/>
                        <label className="form-control" htmlFor="option8">
                            option8
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option9" type="checkbox" name="option9"/>
                        <label className="form-control" htmlFor="option9">
                            option9
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option10" type="checkbox" name="option10"/>
                        <label className="form-control" htmlFor="option10">
                            option10
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option11" type="checkbox" name="option11"/>
                        <label className="form-control" htmlFor="option11">
                            option11
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option12" type="checkbox" name="option12"/>
                        <label className="form-control" htmlFor="option12">
                            option12
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option14" type="checkbox" name="option14"/>
                        <label className="form-control" htmlFor="option14">
                            option14
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option15" type="checkbox" name="option15"/>
                        <label className="form-control" htmlFor="option15">
                            option15
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option16" type="checkbox" name="option16"/>
                        <label className="form-control" htmlFor="option16">
                            option16
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="other" type="checkbox" name="other"/>
                        <label className="form-control" htmlFor="other">
                            other
                        </label>
                        <div className="hideDiv">
                            <div className="inputGroup">
                                <div className="halfDiv">
                                    <input type="text" name="space" placeholder="Please enter space"/>
                                    <button aria-label="submit" type="button" className="allBtn dark">Submit</button>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="commonSection">
                <h3>Outdoor Spaces</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="option" type="checkbox" name="option"/>
                        <label className="form-control" htmlFor="option">
                            option
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option1" type="checkbox" name="option1"/>
                        <label className="form-control" htmlFor="option1">
                            option1
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option2" type="checkbox" name="option2"/>
                        <label className="form-control" htmlFor="option2">
                            option2
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option3" type="checkbox" name="option3"/>
                        <label className="form-control" htmlFor="option3">
                            option3
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option4" type="checkbox" name="option4"/>
                        <label className="form-control" htmlFor="option4">
                            option4
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option5" type="checkbox" name="option5"/>
                        <label className="form-control" htmlFor="option5">
                            option5
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option6" type="checkbox" name="option6"/>
                        <label className="form-control" htmlFor="option6">
                            option6
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option7" type="checkbox" name="option7"/>
                        <label className="form-control" htmlFor="option7">
                            option7
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option8" type="checkbox" name="option8"/>
                        <label className="form-control" htmlFor="option8">
                            option8
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option9" type="checkbox" name="option9"/>
                        <label className="form-control" htmlFor="option9">
                            option9
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option10" type="checkbox" name="option10"/>
                        <label className="form-control" htmlFor="option10">
                            option10
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option11" type="checkbox" name="option11"/>
                        <label className="form-control" htmlFor="option11">
                            option11
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option12" type="checkbox" name="option12"/>
                        <label className="form-control" htmlFor="option12">
                            option12
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option14" type="checkbox" name="option14"/>
                        <label className="form-control" htmlFor="option14">
                            option14
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option15" type="checkbox" name="option15"/>
                        <label className="form-control" htmlFor="option15">
                            option15
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option16" type="checkbox" name="option16"/>
                        <label className="form-control" htmlFor="option16">
                            option16
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="other1" type="checkbox" name="other"/>
                        <label className="form-control" htmlFor="other1">
                            other
                        </label>
                        <div className="hideDiv">
                            <div className="inputGroup">
                                <div className="halfDiv">
                                    <input type="text" name="space" placeholder="Please enter space"/>
                                    <button aria-label="submit" type="button" className="allBtn dark">Submit</button>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="commonSection">
                <h3>Notable Spaces</h3>
                <div className="checkboxDiv">
                    <div className="singleCheckbox">
                        <input id="option" type="checkbox" name="option"/>
                        <label className="form-control" htmlFor="option">
                            option
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option1" type="checkbox" name="option1"/>
                        <label className="form-control" htmlFor="option1">
                            option1
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option2" type="checkbox" name="option2"/>
                        <label className="form-control" htmlFor="option2">
                            option2
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option3" type="checkbox" name="option3"/>
                        <label className="form-control" htmlFor="option3">
                            option3
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option4" type="checkbox" name="option4"/>
                        <label className="form-control" htmlFor="option4">
                            option4
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option5" type="checkbox" name="option5"/>
                        <label className="form-control" htmlFor="option5">
                            option5
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option6" type="checkbox" name="option6"/>
                        <label className="form-control" htmlFor="option6">
                            option6
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option7" type="checkbox" name="option7"/>
                        <label className="form-control" htmlFor="option7">
                            option7
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option8" type="checkbox" name="option8"/>
                        <label className="form-control" htmlFor="option8">
                            option8
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option9" type="checkbox" name="option9"/>
                        <label className="form-control" htmlFor="option9">
                            option9
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option10" type="checkbox" name="option10"/>
                        <label className="form-control" htmlFor="option10">
                            option10
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option11" type="checkbox" name="option11"/>
                        <label className="form-control" htmlFor="option11">
                            option11
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option12" type="checkbox" name="option12"/>
                        <label className="form-control" htmlFor="option12">
                            option12
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option14" type="checkbox" name="option14"/>
                        <label className="form-control" htmlFor="option14">
                            option14
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option15" type="checkbox" name="option15"/>
                        <label className="form-control" htmlFor="option15">
                            option15
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="option16" type="checkbox" name="option16"/>
                        <label className="form-control" htmlFor="option16">
                            option16
                        </label>
                    </div>
                    <div className="singleCheckbox">
                        <input id="other2" type="checkbox" name="other2"/>
                        <label className="form-control" htmlFor="other2">
                            other
                        </label>
                        <div className="hideDiv">
                            <div className="inputGroup">
                                <div className="halfDiv">
                                    <input type="text" name="space" placeholder="Please enter space"/>
                                    <button aria-label="submit" type="button" className="allBtn dark">Submit</button>
                                </div>
                            </div>                        
                        </div>
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

export default ConfirmPropertyDetailsStep3;

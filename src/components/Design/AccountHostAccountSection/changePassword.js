"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./yourProfile.module.scss";
import RightTick from "../../../../public/assets/images/tick-mark.svg"
import WrongTick from "../../../../public/assets/images/error-cross.svg"

function ChangePassword() {
  
  return (
    <div className={styles.yourProfileInformation + " " + styles.changePassword}>
        <div className="informationDiv">
        <form>
            <div className="inputGroup">
              <div className="halfInput">
                <input type="password" name="epassword" placeholder="Existing Password" />
              </div>
              <div className="halfInput">
              </div>
            </div>
            <div className="inputGroup">
              <div className="halfInput">
                <input type="password" name="npassword" placeholder="New Password" />
              </div>
              <div className="halfInput">
                <input type="password" name="confirmpassword" placeholder="Confirm New Password" />
              </div>
            </div>
            <div className="passwordHintDiv">
                <div className="hintDiv">
                    <h4>Password Must Be:</h4>
                    <ul>
                        <li>
                            <Image src={RightTick} className="rightIcon" height={14} width={14} alt="tick-mark"/>
                            <Image src={WrongTick} className="wrongIcon" height={14} width={14} alt="tick-mark"/>
                            <span>Minimum of 8 characters</span>
                        </li>
                        <li>
                            <Image src={RightTick} className="rightIcon" height={14} width={14} alt="tick-mark"/>
                            <Image src={WrongTick} className="wrongIcon" height={14} width={14} alt="tick-mark"/>
                            <span>At least 1 number</span>
                        </li>
                        <li>
                            <Image src={RightTick} className="rightIcon" height={14} width={14} alt="tick-mark"/>
                            <Image src={WrongTick} className="wrongIcon" height={14} width={14} alt="tick-mark"/>
                            <span>At least 1 Capital Letter</span>
                        </li>
                    </ul>
                </div>
                <button type="button" aria-label="save" className="allBtn dark border">Save</button>
            </div>            
          </form>
        </div>
    </div>
  );
}

export default ChangePassword;

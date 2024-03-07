"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./accountCustomerProfileForm.module.scss";
import UploadButton from "../../../../public/assets/images/upload-image.svg";
import SelectedImage from "../../../../public/assets/images/host-2.png";
import RightTick from "../../../../public/assets/images/tick-mark.svg";
import WrongTick from "../../../../public/assets/images/error-cross.svg";

function AccountCustomerProfileForm() {
  const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);

  // Handle the change event when a file is selected
  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
  };
  return (
    <div className={styles.accountCustomerProfileForm}>
      <div className="container">
        <form>
          <div className="yourProfileInformation">
            <div className="profileDiv">
              <div className="imageSection">
                <div>
                  {/* Hidden file input element */}
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleOnChange}
                    style={{ display: "none" }}
                  />
                  {/* Button to trigger the file input dialog */}
                  <button
                    type="button"
                    className="upload-btn"
                    onClick={onChooseFile}
                  >
                    <span className="file-btn">
                      <Image
                        src={UploadButton}
                        height={125}
                        width={125}
                        alt="upload-btn"
                      />
                    </span>
                    <span className="add-img">+ Add image</span>
                  </button>
                  {selectedFile && (
                    <div className="selected-file">
                      <Image
                        src={SelectedImage}
                        height={110}
                        width={120}
                        alt="selectedimg"
                      />
                      {/* <p>{selectedFile.name}</p> */}
                      <button type="button" onClick={removeFile}>
                        <span class="material-symbols-rounded">Delete</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="informationDiv">
              <h3>Your Information</h3>
              <div className="inputGroup">
                <div className="halfInput">
                  <input type="text" name="fname" placeholder="First Name" />
                </div>
                <div className="halfInput">
                  <input type="text" name="surname" placeholder="Surname" />
                </div>
              </div>
              <div className="inputGroup">
                <div className="halfInput">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="halfInput">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile (this will not be shared)"
                  />
                </div>
              </div>
              <div className="inputGroup">
                <textarea name="desc" placeholder="Bio"></textarea>
              </div>
              <hr />
              <h3>Change Password</h3>
              <div className="inputGroup">
                <div className="halfInput">
                  <input
                    type="password"
                    name="epassword"
                    placeholder="Existing Password"
                  />
                </div>
                <div className="halfInput"></div>
              </div>
              <div className="inputGroup">
                <div className="halfInput">
                  <input
                    type="password"
                    name="npassword"
                    placeholder="New Password"
                  />
                </div>
                <div className="halfInput">
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
              <div className="passwordHintDiv">
                <div className="hintDiv">
                  <h5>Password Must Be:</h5>
                  <ul>
                    <li>
                      <Image
                        src={RightTick}
                        className="rightIcon"
                        height={14}
                        width={14}
                        alt="tick-mark"
                      />
                      <Image
                        src={WrongTick}
                        className="wrongIcon"
                        height={14}
                        width={14}
                        alt="tick-mark"
                      />
                      <span>Minimum of 8 characters</span>
                    </li>
                    <li>
                      <Image
                        src={RightTick}
                        className="rightIcon"
                        height={14}
                        width={14}
                        alt="tick-mark"
                      />
                      <Image
                        src={WrongTick}
                        className="wrongIcon"
                        height={14}
                        width={14}
                        alt="tick-mark"
                      />
                      <span>At least 1 number</span>
                    </li>
                    <li>
                      <Image
                        src={RightTick}
                        className="rightIcon"
                        height={14}
                        width={14}
                        alt="tick-mark"
                      />
                      <Image
                        src={WrongTick}
                        className="wrongIcon"
                        height={14}
                        width={14}
                        alt="tick-mark"
                      />
                      <span>At least 1 Capital Letter</span>
                    </li>
                  </ul>
                </div>
                <button type="button" className="allBtn dark border">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountCustomerProfileForm;

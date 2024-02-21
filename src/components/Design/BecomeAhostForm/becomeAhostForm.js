"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BackArrow from "../../../../public/assets/images/back-arrow.svg"
import UploadButton from "../../../../public/assets/images/upload-image.svg"
import SelectedImage from "../../../../public/assets/images/host-2.png"
import styles from "./becomeAhostForm.module.scss";

function BecomeAhostForm() {
  const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);

  // Handle the change event when a file is selected
  const handleOnChange = event => {
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
    <section className={styles.BecomeAhostForm}>
      <div className="container">
        <div className="formDiv">
          <Link className="backbtn" href=""> <Image src={BackArrow} alt="backarrow" height={14} width={9}></Image> Back To Become A Host </Link>
          <div className="formDetails">
            <h2>Please Enter Details Below</h2>
            <p>We personally check all venue information. We are now going to ask you to submit some brief details which if approved<br/> we will then require the full property details</p>
            <form>
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
                <div>
                  {/* Hidden file input element */}
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleOnChange}
                    style={{ display: "none" }}
                    multiple
                  />
                  {/* Button to trigger the file input dialog */}
                  <button type="button" className="upload-btn" onClick={onChooseFile}>
                    <span className="file-btn">
                      <Image src={UploadButton} height={125} width={125} alt="upload-btn"/>
                    </span>
                    <span className="add-img">+ Add image</span>
                  </button>
                  {selectedFile && (
                    <div className="selected-file">                      
                      <Image src={SelectedImage} height={110} width={120} alt="selectedimg"/>
                      <p>{selectedFile.name}</p>
                      <button type="button" onClick={removeFile}>
                        <span class="material-symbols-rounded">Delete</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <hr/>
              <div className="aboutYou">
                  <h2>About You</h2>
                  <div className="inputGroup">
                    <div className="halfInput">
                      <input type="text" name="iusername" placeholder="Instagram Username" />
                    </div>
                    <div className="halfInput"></div>
                  </div>
                  <div className="inputGroup">
                    <textarea name="bio" placeholder="Your Bio"></textarea>
                  </div>
                  <hr />
              </div>
              <button type="button" className="allBtn dark">Submit for approval</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BecomeAhostForm;

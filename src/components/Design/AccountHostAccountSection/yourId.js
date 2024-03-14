"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./yourProfile.module.scss";
import InfoIcon from "../../../../public/assets/images/question-mark.svg"
import UploadButton from "../../../../public/assets/images/upload-image.svg"
import SelectedImage from "../../../../public/assets/images/host-2.png"

function YourId() {
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
    <div className={styles.yourProfileInformation + " " + styles.yourId}>
        <div className="profileDiv">
          <h3>Identification</h3>
          <p>Please upload an image of your ID for verification (Passport or Driving license accepted)</p>
          <span><Image src={InfoIcon} alt="infoicon" height={14} width={14}/>Why do we need this information?</span>
          <form>
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
                    <button type="button" aria-label="upload" className="upload-btn" onClick={onChooseFile}>
                      <span className="file-btn">
                        <Image src={UploadButton} height={125} width={125} alt="upload-btn"/>
                      </span>
                      <span className="add-img">Browse</span>
                    </button>
                    {selectedFile && (
                      <div className="selected-file">                      
                        <Image src={SelectedImage} height={110} width={120} alt="selectedimg"/>
                        {/* <p>{selectedFile.name}</p> */}
                        <button aria-label="remove" type="button" onClick={removeFile}>
                          <span class="material-symbols-rounded">Delete</span>
                        </button>
                      </div>
                    )}
                  </div>
            </div>
            <hr/>
            <button type="button" aria-label="save" className="allBtn dark border">Save</button>
          </form>
        </div>     
    </div>
  );
}

export default YourId;

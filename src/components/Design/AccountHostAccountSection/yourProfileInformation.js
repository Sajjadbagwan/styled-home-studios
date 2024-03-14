"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./yourProfile.module.scss";
import UploadButton from "../../../../public/assets/images/upload-image.svg"
import SelectedImage from "../../../../public/assets/images/host-2.png"

function YourProfileInformation() {
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
    <div className={styles.yourProfileInformation}>
        <div className="profileDiv">
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
                    <button aria-label="upload" type="button" className="upload-btn" onClick={onChooseFile}>
                      <span className="file-btn">
                        <Image src={UploadButton} height={125} width={125} alt="upload-btn"/>
                      </span>
                      <span className="add-img">+ Add image</span>
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
          </form>
        </div>
        <div className="informationDiv">
          <h3>Your Information</h3>
          <form>
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
                <input type="email" name="email" placeholder="Email Address" />
              </div>
              <div className="halfInput">
                <input type="text" name="mobile" placeholder="Mobile (this will not be shared)" />
              </div>
            </div>
            <div className="inputGroup">
              <textarea name="desc" placeholder="Bio"></textarea>
            </div>
            <hr/>
            <button aria-label="save" type="button" className="allBtn dark border">Save</button>
          </form>
        </div>        
    </div>
  );
}

export default YourProfileInformation;

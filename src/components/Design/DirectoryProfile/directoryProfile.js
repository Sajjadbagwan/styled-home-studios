"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Select from 'react-select';
import styles from "./directoryProfile.module.scss";
import UploadButton from "../../../../public/assets/images/upload-image.svg"
import SelectedImage from "../../../../public/assets/images/host-2.png"
import EditIcon from "../../../../public/assets/images/edit-icon.svg"
import EmailIcon from "../../../../public/assets/images/color-email.svg"
import PinterestIcon from "../../../../public/assets/images/color-pinterest.svg"
import CallIcon from "../../../../public/assets/images/color-call.svg"
import InstagramIcon from "../../../../public/assets/images/color-instagram.svg"
import WebIcon from "../../../../public/assets/images/color-web.svg"
import TiktokIcon from "../../../../public/assets/images/color-tiktok.svg"

function DirectoryProfileEditSection() {
  const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);
  const optionstitle = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ];

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
    <div className={styles.directoryProfileEditSection}>
        <div className="container">
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
                    <button type="button" className="upload-btn" onClick={onChooseFile}>
                      <span className="file-btn">
                        <Image src={UploadButton} height={125} width={125} alt="upload-btn"/>
                      </span>
                      <span className="add-img">+ Add image</span>
                    </button>
                    {selectedFile && (
                      <div className="selected-file">                      
                        <Image src={SelectedImage} height={110} width={120} alt="selectedimg"/>
                        {/* <p>{selectedFile.name}</p> */}
                        <button type="button" onClick={removeFile}>
                          <span class="material-symbols-rounded">Delete</span>
                        </button>
                      </div>
                    )}
                  </div>
            </div>
          </form>
        </div>
        <div className="informationDiv">
            <div className="titleDiv">
                <h3>Your Information</h3>
                <Link href=""><Image src={EditIcon} height={15} width={8} alt="edit-icon"/>Edit Profile</Link>
            </div>
          <form>
            <div className="inputGroup">
              <div className="halfInput">
                <input type="text" name="headline" placeholder="Headline" />
              </div>
              <div className="halfInput">
                <input type="text" name="name" placeholder="Name" />
              </div>
            </div>
            <div className="inputGroup">
              <textarea name="desc" placeholder="Bio"></textarea>
            </div>
            <div className="inputGroup">
              <div className="halfInput">
                <input type="text" name="location" placeholder="Location" />
              </div>
              <div className="halfInput">
                <div className="drop_down">
                    <div className="wrapper_dropdown">
                    <Select
                        classNamePrefix="react-select"
                        placeholder="I am willing to travel…"
                        options={optionstitle}
                        className={styles.selectCheckout}
                        
                        />
                    </div>
                </div>
              </div>
            </div>
            <hr/>
            <div className="titleDiv">
                <h3>Contact Information And Links</h3>
            </div>
            <div className="inputGroup socialGroup">
                <div className="halfInput">
                    <span><Image src={PinterestIcon} height={16} width={16} alt="pinterest-icon"/></span>
                    <input type="text" name="pinterest" placeholder="Please enter your Pinterest URL" />
                </div>
            </div>
            <div className="inputGroup socialGroup">
                <div className="halfInput">
                    <span><Image src={InstagramIcon} height={16} width={16} alt="insta-icon"/></span>
                    <input type="text" name="iusername" placeholder="@ Please enter your Instagram URL" />
                </div>
            </div>
            <div className="inputGroup socialGroup">
                <div className="halfInput">
                    <span><Image src={TiktokIcon} height={16} width={16} alt="tiktok-icon"/></span>
                    <input type="text" name="tiktok" placeholder="Please enter your TikTok URL" />
                </div>
            </div>
            <div className="inputGroup socialGroup">
                <div className="halfInput">
                    <span><Image src={EmailIcon} height={16} width={16} alt="email-icon"/></span>
                    <input type="text" name="yemail" placeholder="Please enter your email address" />
                </div>
            </div>
            <div className="inputGroup socialGroup">
                <div className="halfInput">
                    <span><Image src={CallIcon} height={16} width={16} alt="call-icon"/></span>
                    <input type="text" name="yphone" placeholder="Please enter your phone number" />
                </div>
            </div>
            <div className="inputGroup socialGroup">
                <div className="halfInput">
                    <span><Image src={WebIcon} height={16} width={16} alt="web-icon"/></span>
                    <input type="text" name="yweb" placeholder="Please enter your website URL" />
                </div>
            </div>
            <button type="button" className="allBtn dark border">Submit</button>
          </form>
        </div>  
        </div>
              
    </div>
  );
}

export default DirectoryProfileEditSection;

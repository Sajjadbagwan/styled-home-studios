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
                    <button aria-label="upload-btn" type="button" className="upload-btn" onClick={onChooseFile}>
                      <span className="file-btn">
                        <Image src={UploadButton} height={125} width={125} alt="upload-btn"/>
                      </span>
                      <span className="add-img">+ Add image</span>
                    </button>
                    {selectedFile && (
                      <div className="selected-file">                      
                        <Image src={SelectedImage} height={110} width={120} alt="selectedimg"/>
                        {/* <p>{selectedFile.name}</p> */}
                        <button aria-label="remove-btn" type="button" onClick={removeFile}>
                          <span class="material-symbols-rounded">Delete</span>
                        </button>
                      </div>
                    )}
                  </div>
            </div>
          </form>
        </div>
        <div className="informationDiv">
          <form>
            <div className="titleDiv">
                <h3>Your Information</h3>
                <Link href=""><Image src={EditIcon} height={15} width={8} alt="edit-icon"/>Edit Profile</Link>
            </div>
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
                    <span><Image src={PinterestIcon} height={30} width={30} alt="pinterest-icon"/></span>
                    <input type="text" name="pinterest" placeholder="Please enter your Pinterest URL" />
                </div>
            </div>
            <div className="inputGroup socialGroup">
                <div className="halfInput">
                    <span><Image src={InstagramIcon} height={30} width={30} alt="insta-icon"/></span>
                    <input type="text" name="iusername" placeholder="@ Please enter your Instagram URL" />
                </div>
            </div>
            <div className="inputGroup socialGroup">
                <div className="halfInput">
                    <span><Image src={TiktokIcon} height={30} width={30} alt="tiktok-icon"/></span>
                    <input type="text" name="tiktok" placeholder="Please enter your TikTok URL" />
                </div>
            </div>
            <div className="inputGroup socialGroup">
                <div className="halfInput">
                    <span><Image src={EmailIcon} height={30} width={30} alt="email-icon"/></span>
                    <input type="text" name="yemail" placeholder="Please enter your email address" />
                </div>
            </div>
            <div className="inputGroup socialGroup">
                <div className="halfInput">
                    <span><Image src={CallIcon} height={30} width={30} alt="call-icon"/></span>
                    <input type="text" name="yphone" placeholder="Please enter your phone number" />
                </div>
            </div>
            <div className="inputGroup socialGroup webGroup">
                <div className="halfInput">
                    <span><Image src={WebIcon} height={30} width={30} alt="web-icon"/></span>
                    <input type="text" name="yweb" placeholder="Please enter your website URL" />
                </div>
            </div>
            <hr />
            <div className="titleDiv">
                <h3>Testimonial Details</h3>
            </div>
            <div className="inputGroup">
              <textarea name="testimonial" placeholder="Testimonial"></textarea>
            </div>
            <div className="inputGroup">
              <div className="halfInput">
                <input type="text" name="cname" placeholder="Name" />
              </div>
              <div className="halfInput">
                <input type="text" name="company" placeholder="Company" />
              </div>
            </div>
            <button aria-label="submit-btn" type="button" className="allBtn dark border">Submit</button>
          </form>
          <div className="testimonialInfo">
            <h3>Testimonials</h3>
            <div className="testiCont">
                <div className="content">
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu.”</p>
                    <h5>Name of host, Property name </h5>
                </div>
                <Link href=""><Image src={EditIcon} height={15} width={8} alt="edit-icon"/>Edit Testimonial</Link>
            </div>
          </div>
          <hr/>
          <div className="propertyImages">
            <h3>Images*</h3>
            <p>(Please drag them into the order you sit to use. The First will be the featured image.)</p>
            <p>Minimum of 5 images, please.</p>
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
                            <button aria-label="upload-btn" type="button" className="upload-btn" onClick={onChooseFile}>
                            <span className="file-btn">
                                <Image src={UploadButton} height={125} width={125} alt="upload-btn"/>
                            </span>
                            <span className="add-img">+ Add image</span>
                            </button>
                            {selectedFile && (
                            <div className="selected-file">                      
                                <Image src={SelectedImage} height={110} width={120} alt="selectedimg"/>
                                {/* <p>{selectedFile.name}</p> */}
                                <button aria-label="delete-btn" type="button" onClick={removeFile}>
                                <span class="material-symbols-rounded">Delete</span>
                                </button>
                            </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
          </div>
          <hr/>
          <div className="tagFilter">
            <h3>Tags For Filtering</h3>
            <ul>
                <li className="filterTitle">
                    <input id="Photographer" type="checkbox" name="Photographer"/>
                    <label className="form-control" htmlFor="Photographer">
                        Photographer
                    </label>
                    <div className="checkboxDiv">
                        <ul>
                            <li>
                                <input id="Category1" type="checkbox" name="Category1"/>
                                <label className="form-control" htmlFor="Category1">
                                    Branding
                                </label>
                            </li>
                            <li>
                                <input id="Child Category4" type="checkbox" name="Child Category4"/>
                                <label className="form-control" htmlFor="Child Category4">
                                    Editiorials
                                </label>
                            </li>
                            <li>
                                <input id="Child Category2" type="checkbox" name="Child Category2"/>
                                <label className="form-control" htmlFor="Child Category2">
                                    Commercial
                                </label>
                            </li>
                            <li>
                                <input id="Child Category3" type="checkbox" name="Child Category3"/>
                                <label className="form-control" htmlFor="Child Category3">
                                    Product
                                </label>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="filterTitle">                
                    <input id="Videographer" type="checkbox" name="Videographer"/>
                    <label className="form-control" htmlFor="Videographer">
                        Videographer
                    </label>
                    <div className="checkboxDiv">
                        <ul>
                            <li>
                                <input id="Category21" type="checkbox" name="Category21"/>
                                <label className="form-control" htmlFor="Category21">
                                    Category 21
                                </label>
                            </li>
                            <li>
                                <input id="Child Category22" type="checkbox" name="Child Category22"/>
                                <label className="form-control" htmlFor="Child Category22">
                                    Child Category 22
                                </label>
                            </li>
                            <li>
                                <input id="Child Category23" type="checkbox" name="Child Category23"/>
                                <label className="form-control" htmlFor="Child Category23">
                                    Child Category 23
                                </label>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="filterTitle">                
                    <input id="Stylist" type="checkbox" name="Stylist"/>
                    <label className="form-control" htmlFor="Stylist">
                        Stylist
                    </label>
                    <div className="checkboxDiv">
                        <ul>
                            <li>
                                <input id="Category43" type="checkbox" name="Category43"/>
                                <label className="form-control" htmlFor="Category43">
                                    Fashion
                                </label>
                            </li>
                            <li>
                                <input id="Child Category44" type="checkbox" name="Child Category44"/>
                                <label className="form-control" htmlFor="Child Category44">
                                    Interior
                                </label>
                            </li>
                            <li>
                                <input id="Child Category45" type="checkbox" name="Child Category45"/>
                                <label className="form-control" htmlFor="Child Category45">
                                    Food
                                </label>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="filterTitle">                
                    <input id="Hair" type="checkbox" name="Hair"/>
                    <label className="form-control" htmlFor="Hair">
                        Hair & Makeup
                    </label>
                    <div className="checkboxDiv">
                        <ul>
                            <li>
                                <input id="Category4" type="checkbox" name="Category4"/>
                                <label className="form-control" htmlFor="Category4">
                                    Category 4
                                </label>
                            </li>
                            <li>
                                <input id="Child Category1" type="checkbox" name="Child Category1"/>
                                <label className="form-control" htmlFor="Child Category1">
                                    Child Category 1
                                </label>
                            </li>
                            <li>
                                <input id="Child Category2" type="checkbox" name="Child Category2"/>
                                <label className="form-control" htmlFor="Child Category2">
                                    Child Category 2
                                </label>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
          </div>
          <hr/>
          <button aria-label="save-btn" type="button" className="allBtn dark border">Save</button>
        </div>  
        </div>
              
    </div>
  );
}

export default DirectoryProfileEditSection;

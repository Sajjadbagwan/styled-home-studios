"use client";
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { Rating } from 'react-simple-star-rating'
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const LeaveReviewPopup = (props) => {
  const { LeaveReviewIsOpen, closeLeaveReviewModal} = props; 
  const [rating, setRating] = useState(0) 
  const handleRating = () => {
    setRating(rate)
  }

  return (
    <>
      <Modal
                isOpen={LeaveReviewIsOpen}
                onRequestClose={closeLeaveReviewModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className={styles.verifyIdentityPopup + " " + styles.leaveReviewPopup}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button type="button" className="close-btn" onClick={closeLeaveReviewModal}>
                          <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>
                        </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Thanks For Renting Bright And Light Townhouse - N1</h3>
                        <h4>Your Review</h4>
                        <h5>Overall Experience</h5>
                        {/* <Rating
                          onClick={handleRating}
                          SVGstrokeColor="#20535a"
                          fillColor="#fff"
                          
                        /> */}

                        <Rating
                          initialValue={rating}
                          allowFraction={true}
                          size={36}
                          emptyColor="#fff"
                          fillColor="#20535a"
                          SVGstorkeWidth="1"
                          SVGstrokeColor="#20535a"  
                          className="ratingStartIcon"
                          // fillIcon={<FontAwesomeIcon icon={faStar} />}
                          // emptyIcon={<FontAwesomeIcon icon={faStar} />}
                        />
                        <span className="rating">4.5</span>
                        <form>
                          <div className="inputGroup">
                            <textarea placeholder="Please Add Review*" name="reason"></textarea>
                          </div>
                        </form>
                        <div className="button-container">
                          <button type="button" className="allBtn dark border" onClick={closeLeaveReviewModal}>Submit</button>
                        </div>
                    </div>
                </div>
                
            </Modal>
    </>
  );
};

export default LeaveReviewPopup;

"use client";
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const CancelBookingPopup = (props) => {
  const { CancelBookingIsOpen, closeCancelBookingModal, openConfirmCancelBookingModal} = props; 
  return (
    <>
      <Modal
                isOpen={CancelBookingIsOpen}
                onRequestClose={closeCancelBookingModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className={styles.verifyIdentityPopup + " " + styles.declinedBooking}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button type="button" className="close-btn" onClick={closeCancelBookingModal}>
                          <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>  
                        </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Cancel Booking</h3>
                        <form>
                          <div className="inputGroup">
                            <textarea placeholder="Reason for cancellation**" name="reason"></textarea>
                          </div>
                        </form>
                        <div className="button-container">
                          <button type="button" className="allBtn dark border" onClick={closeCancelBookingModal}>No, Cancel</button>
                          <button type="button" href="" onClick={() => {closeCancelBookingModal(), openConfirmCancelBookingModal()}}>Yes, Cancel Booking</button>
                        </div>
                    </div>
                </div>
                
            </Modal>
    </>
  );
};

export default CancelBookingPopup;

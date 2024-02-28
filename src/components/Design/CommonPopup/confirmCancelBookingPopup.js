"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const ConfirmCancelBookingPopup = (props) => {
  const { ConfirmCancelBookingIsOpen, closeConfirmCancelBookingModal, openCancelConfirmationModal } = props;
  return (
    <>
      <Modal
                isOpen={ConfirmCancelBookingIsOpen}
                onRequestClose={closeConfirmCancelBookingModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className={styles.verifyIdentityPopup + " " + styles.confirmAcceptBookingPopup}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button type="button" className="close-btn" onClick={closeConfirmCancelBookingModal}>
                        <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>  
                        </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Cancel Booking</h3>
                        <p>Are you sure you would like to cancel booking #004<br/>and refund the payment?</p>
                        <div className="button-container">
                          <button type="button" className="allBtn dark border" onClick={closeConfirmCancelBookingModal}>No, Cancel</button>
                          <button type="button" onClick={() => {closeConfirmCancelBookingModal(), openCancelConfirmationModal()}}>Yes, Cancel Booking</button>
                        </div>
                    </div>
                </div>
            </Modal>
    </>
  );
};

export default ConfirmCancelBookingPopup;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const ConfirmDeclineBookingPopup = (props) => {
  const { ConfirmDeclineBookingIsOpen, closeConfirmDeclineBookingModal} = props;

  return (
    <>
      <Modal
                isOpen={ConfirmDeclineBookingIsOpen}
                onRequestClose={closeConfirmDeclineBookingModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className={styles.verifyIdentityPopup + " " + styles.confirmDeclineBookingPopup}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button type="button" className="close-btn" onClick={closeConfirmDeclineBookingModal}>
                        <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>
                        </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Decline Booking</h3>
                        <p>Are you sure you would like to decline booking <span>#004</span>?</p>
                        <div className="button-container">
                          <button type="button" className="allBtn dark border" onClick={closeConfirmDeclineBookingModal}>No, Cancel</button>
                          <button type="button" href="" onClick={closeConfirmDeclineBookingModal}>Yes, Decline Booking</button>
                        </div>
                    </div>
                </div>
            </Modal>
    </>
  );
};

export default ConfirmDeclineBookingPopup;

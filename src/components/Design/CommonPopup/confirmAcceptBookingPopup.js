"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import styles from "./verifyIdentity.module.scss";
const ConfirmAcceptBookingPopup = (props) => {
  const { ConfirmAcceptBookingIsOpen, closeConfirmAcceptBookingModal } = props;
  return (
    <>
      <Modal
                isOpen={ConfirmAcceptBookingIsOpen}
                onRequestClose={closeConfirmAcceptBookingModal}
                contentLabel="Example Modal"
                className={styles.verifyIdentityPopup + " " + styles.confirmAcceptBookingPopup}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button type="button" className="close-btn" onClick={closeConfirmAcceptBookingModal}>x</button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Accept Booking</h3>
                        <p>Are you sure you would like to accept booking <span>#004</span><br/> and take payment?</p>
                        <div className="button-container">
                          <button type="button" className="allBtn dark border" onClick={closeConfirmAcceptBookingModal}>Accept Booking</button>
                          <button type="button" onClick={closeConfirmAcceptBookingModal}>No, Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal>
    </>
  );
};

export default ConfirmAcceptBookingPopup;

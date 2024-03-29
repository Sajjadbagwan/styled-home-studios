"use client";
import React,{useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const ConfirmCancelBookingPopup = (props) => {
  const { ConfirmCancelBookingIsOpen, closeConfirmCancelBookingModal, openCancelConfirmationModal } = props;
  useEffect(() => {
    const body = document.querySelector('html');
    body.style.overflow = ConfirmCancelBookingIsOpen ? 'hidden' : 'auto';
  }, [ConfirmCancelBookingIsOpen])
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
                        <button aria-label="close-btn" type="button" className="close-btn" onClick={closeConfirmCancelBookingModal}>
                        <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>  
                        </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Cancel Booking</h3>
                        <p>Are you sure you would like to cancel booking #004<br/>and refund the payment?</p>
                        <div className="button-container">
                          <button aria-label="cancel-btn" type="button" className="allBtn dark border" onClick={closeConfirmCancelBookingModal}>No, Cancel</button>
                          <button type="button" aria-label="cancel-book" onClick={() => {closeConfirmCancelBookingModal(), openCancelConfirmationModal()}}>Yes, Cancel Booking</button>
                        </div>
                    </div>
                </div>
            </Modal>
    </>
  );
};

export default ConfirmCancelBookingPopup;

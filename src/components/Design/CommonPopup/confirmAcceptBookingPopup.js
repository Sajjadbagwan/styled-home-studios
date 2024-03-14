"use client";
import React,{useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const ConfirmAcceptBookingPopup = (props) => {
  const { ConfirmAcceptBookingIsOpen, closeConfirmAcceptBookingModal } = props;
  useEffect(() => {
    const body = document.querySelector('html');
    body.style.overflow = ConfirmAcceptBookingIsOpen ? 'hidden' : 'auto';
  }, [ConfirmAcceptBookingIsOpen])
  return (
    <>
      <Modal
                isOpen={ConfirmAcceptBookingIsOpen}
                onRequestClose={closeConfirmAcceptBookingModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className={styles.verifyIdentityPopup + " " + styles.confirmAcceptBookingPopup}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button aria-label="cancel-btn" type="button" className="close-btn" onClick={closeConfirmAcceptBookingModal}>
                          <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>  
                        </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Accept Booking</h3>
                        <p>Are you sure you would like to accept booking <span>#004</span><br/> and take payment?</p>
                        <div className="button-container">
                          <button aria-label="accept" type="button" className="allBtn dark border" onClick={closeConfirmAcceptBookingModal}>Accept Booking</button>
                          <button type="button" aria-label="cancel-btn" onClick={closeConfirmAcceptBookingModal}>No, Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal>
    </>
  );
};

export default ConfirmAcceptBookingPopup;

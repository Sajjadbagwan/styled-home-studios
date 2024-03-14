"use client";
import React,{useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const CancelConfirmationPopup = (props) => {
  const { CancelConfirmationIsOpen, closeCancelConfirmationModal } = props;
  useEffect(() => {
    const body = document.querySelector('html');
    body.style.overflow = CancelConfirmationIsOpen ? 'hidden' : 'auto';
  }, [CancelConfirmationIsOpen])
  return (
    <>
      <Modal
                isOpen={CancelConfirmationIsOpen}
                onRequestClose={closeCancelConfirmationModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className={styles.verifyIdentityPopup + " " + styles.confirmAcceptBookingPopup}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button aria-label="close-btn" type="button" className="close-btn" onClick={closeCancelConfirmationModal}>
                          <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>
                        </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Confirmation</h3>
                        <p>You have successfully sent the email confirmation.</p>
                        <div className="button-container">
                          <button aria-label="close-btn" type="button" className="allBtn dark border" onClick={closeCancelConfirmationModal}>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
    </>
  );
};

export default CancelConfirmationPopup;

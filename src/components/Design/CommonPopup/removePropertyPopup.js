"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const RemovePropertyPopup = (props) => {
  const { RemovePropertyIsOpen, closeRemovePropertyModal} = props;
  return (
    <>
      <Modal
                isOpen={RemovePropertyIsOpen}
                onRequestClose={closeRemovePropertyModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className={styles.verifyIdentityPopup + " " + styles.removePropertyPopup}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button aria-label="close-btn" type="button" className="close-btn" onClick={closeRemovePropertyModal}>
                          <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>  
                        </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Remove This Property?</h3>
                        <p>This will remove the listing completely from your account.<br/>Are you sure you want to cancel your application for<br/><span> ELEGANT EDINBURGH TOWNHOUSE - EH15 </span></p>
                        <div className="button-container">
                          <button aria-label="remove" type="button" className="allBtn dark border" onClick={closeRemovePropertyModal}>No, Cancel</button>
                          <Link href="" >Yes, Remove Property</Link>
                        </div>
                    </div>
                </div>
            </Modal>
    </>
  );
};

export default RemovePropertyPopup;

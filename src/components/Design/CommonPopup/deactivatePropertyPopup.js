"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const DeactivatePropertyPopup = (props) => {
  const { DeactivatePropertyIsOpen, closeDeactivatePropertyodal} = props;
  return (
    <>
      <Modal
                isOpen={DeactivatePropertyIsOpen}
                onRequestClose={closeDeactivatePropertyodal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className={styles.verifyIdentityPopup + " " + styles.removePropertyPopup}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button type="button" className="close-btn" onClick={closeDeactivatePropertyodal}>
                        <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>
                        </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Deactivate This Property?</h3>
                        <p>This will deactivate the listing.<br/>Any bookings made against the property<br/>will remain.</p>
                        <div className="button-container">
                          <button type="button" className="allBtn dark border" onClick={closeDeactivatePropertyodal}>No, Cancel</button>
                          <Link href="" >Yes, Deactivate Property</Link>
                        </div>
                    </div>
                </div>
            </Modal>
    </>
  );
};

export default DeactivatePropertyPopup;

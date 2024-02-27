"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import styles from "./verifyIdentity.module.scss";
const VerifyIdentityPopup = (props) => {
  const { VerifyIdentityIsOpen, closeVerifyIdentityModal} = props;
  return (
    <>
      <Modal
                isOpen={VerifyIdentityIsOpen}
                onRequestClose={closeVerifyIdentityModal}
                contentLabel="Example Modal"
                className={styles.verifyIdentityPopup}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button type="button" className="close-btn" onClick={closeVerifyIdentityModal}>x</button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Please Verify Your Identity</h3>
                        <p>To list properties we require you to upload your ID </p>
                        <div className="button-container">
                          <Link href="" className="allBtn dark border" onClick={closeVerifyIdentityModal}>Upload Now</Link>
                        </div>
                    </div>
                </div>
            </Modal>
    </>
  );
};

export default VerifyIdentityPopup;

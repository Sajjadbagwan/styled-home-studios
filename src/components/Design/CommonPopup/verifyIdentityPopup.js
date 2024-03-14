"use client";
import React,{useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const VerifyIdentityPopup = (props) => {
  const { VerifyIdentityIsOpen, closeVerifyIdentityModal} = props;
  useEffect(() => {
    const body = document.querySelector('html');
    body.style.overflow = VerifyIdentityIsOpen ? 'hidden' : 'auto';
  }, [VerifyIdentityIsOpen])
  return (
    <>
      <Modal
                isOpen={VerifyIdentityIsOpen}
                onRequestClose={closeVerifyIdentityModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className={styles.verifyIdentityPopup}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button aria-label="close-btn" type="button" className="close-btn" onClick={closeVerifyIdentityModal}>
                        <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>
                        </button>  
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

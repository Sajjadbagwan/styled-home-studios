"use client";
import React,{useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const AcceptBookingPopup = (props) => {
  const { AcceptBookingIsOpen, closeAcceptBookingModal, openConfirmAcceptBookingModal} = props; 
    useEffect(() => {
      const body = document.querySelector('html');
      body.style.overflow = AcceptBookingIsOpen ? 'hidden' : 'auto';
    }, [AcceptBookingIsOpen])
  return (
    <>
      <Modal
                isOpen={AcceptBookingIsOpen}
                onRequestClose={closeAcceptBookingModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className={styles.verifyIdentityPopup + " " + styles.declinedBooking}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button aria-label="close" type="button" className="close-btn" onClick={closeAcceptBookingModal}>
                        <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>
                          </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Accept Booking</h3>
                        <form>
                          <div className="inputGroup">
                            <textarea placeholder="Message customer and accept*" name="message-customer"></textarea>
                          </div>
                        </form>
                        <div className="button-container">
                          <button aria-label="accept" type="button" className="allBtn dark border" onClick={() => {closeAcceptBookingModal(), openConfirmAcceptBookingModal()}} >Accept Booking</button>
                          <button aria-label="cancel" type="button" href=""  onClick={closeAcceptBookingModal}>No, Cancel</button>
                        </div>
                    </div>
                </div>
                
            </Modal>
    </>
  );
};

export default AcceptBookingPopup;

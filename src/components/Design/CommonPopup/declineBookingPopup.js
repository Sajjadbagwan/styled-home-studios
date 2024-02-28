"use client";
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import CloseIcon from "../../../../public/assets/images/close-icon.svg"
import styles from "./verifyIdentity.module.scss";
const DeclineBookingPopup = (props) => {
  const { DeclineBookingIsOpen, closeDeclineBookingModal, openConfirmDeclineBookingModal} = props; 
  return (
    <>
      <Modal
                isOpen={DeclineBookingIsOpen}
                onRequestClose={closeDeclineBookingModal}
                contentLabel="Example Modal"
                className={styles.verifyIdentityPopup + " " + styles.declinedBooking}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button type="button" className="close-btn" onClick={closeDeclineBookingModal}>
                        <Image src={CloseIcon} height={12} width={12} alt="close-icon"/>  
                        </button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Decline Booking</h3>
                        <form>
                          <div className="inputGroup">
                            <textarea placeholder="Reason for declined booking*" name="reason"></textarea>
                          </div>
                        </form>
                        <div className="button-container">
                          <button type="button" className="allBtn dark border" onClick={closeDeclineBookingModal}>No, Cancel</button>
                          <button type="button" href=""  onClick={() => {closeDeclineBookingModal(), openConfirmDeclineBookingModal()}}>Yes, Decline Booking</button>
                        </div>
                    </div>
                </div>
                
            </Modal>
    </>
  );
};

export default DeclineBookingPopup;

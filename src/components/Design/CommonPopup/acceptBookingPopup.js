"use client";
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import styles from "./verifyIdentity.module.scss";
const AcceptBookingPopup = (props) => {
  const { AcceptBookingIsOpen, closeAcceptBookingModal, openConfirmAcceptBookingModal} = props; 
  return (
    <>
      <Modal
                isOpen={AcceptBookingIsOpen}
                onRequestClose={closeAcceptBookingModal}
                contentLabel="Example Modal"
                className={styles.verifyIdentityPopup + " " + styles.declinedBooking}
                >
                <div>
                    <div className='productAdded removeCompare'>
                        <button type="button" className="close-btn" onClick={closeAcceptBookingModal}>x</button>  
                    </div>                           
                    <div className="popup-body removeCompare-body">
                        <h3>Accept Booking</h3>
                        <form>
                          <div className="inputGroup">
                            <textarea placeholder="Message customer and accept*" name="message-customer"></textarea>
                          </div>
                        </form>
                        <div className="button-container">
                          <button type="button" className="allBtn dark border" onClick={() => {closeAcceptBookingModal(), openConfirmAcceptBookingModal()}} >Accept Booking</button>
                          <button type="button" href=""  onClick={closeAcceptBookingModal}>No, Cancel</button>
                        </div>
                    </div>
                </div>
                
            </Modal>
    </>
  );
};

export default AcceptBookingPopup;

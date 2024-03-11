"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import DeclineProp from "../../../../public/assets/images/decline-prop.svg"
import CardIcon from "../../../../public/assets/images/card.svg"
import EditIcon from "../../../../public/assets/images/edit-icon.svg"
import styles from "./joinDirectorySection.module.scss";

function SubmitForApprovalPage() {
 
  return (
    <div className={styles.joinDirectoryBilling + " joinDirectoryBilling"}>
        <div className="formDetails">
            <h2>Please Review Your Details Before Submission</h2>
            <div className="messageInfo">
                <div className="reason">
                    <Image src={DeclineProp} alt="question" height={41} width={41} />
                    <div className="warningDiv">
                        <h3>You Will Not Be Charged Until Your Service Is Approved By Our Team</h3>
                    </div>
                </div>
            </div>            
            <form>
                <div className="titleDiv">
                    <h3>Your Services</h3>
                    <Link href=""><Image src={EditIcon} height={15} width={8} alt="edit-icon"/>Edit Details</Link>
                </div>
                <div className="fillData">
                    <p>Makeup Artist</p>
                    <p>johnjamesbeauty.com</p>
                    <p>@johnjamesbeauty</p>
                </div>   
                <hr/>   
                <div className="titleDiv">
                    <h3>Your Subscription</h3>
                    <Link href=""><Image src={EditIcon} height={15} width={8} alt="edit-icon"/>Edit Details</Link>
                </div>   
                <div className="fillData">
                    <h6>Pay Yearly £270</h6>
                </div>    
                <hr/>
                <div className="titleDiv">
                    <h3>Billing Address</h3>
                    <Link href=""><Image src={EditIcon} height={15} width={8} alt="edit-icon"/>Edit Details</Link>
                </div>      
                <div className="fillData">
                    <address>
                        1st Floor, Brooklands House,<br/>
                        42 Wilbury Way,<br/>
                        Hitchin<br/>
                        SG4 0AP
                    </address>
                </div>
                <hr/>
                <div className="titleDiv">
                    <h3>Payment Information <Image src={CardIcon} height={30} width={140} alt="card" /></h3>
                    <Link href=""><Image src={EditIcon} height={15} width={8} alt="edit-icon"/>Edit Details</Link>
                </div>  
                <div className="fillData">
                    <div className="cardData">
                        <p>Card Name:</p>
                        <p>John James</p>
                    </div>
                    <div className="cardData">
                        <p>Card Number:</p>
                        <p>1234 5678 9123 4567</p>
                    </div>
                    <div className="cardExpiry">
                        <div className="cardData">
                            <p>Expiry Month:</p>
                            <p>04</p>
                        </div>
                        <div className="cardData">
                            <p>Expiry Year:</p>
                            <p>2024</p>
                        </div>
                        <div className="cardData">
                            <p>CV2:</p>
                            <p>123</p>
                        </div>
                    </div>
                    
                </div>
                <hr/>
                <div className="buttonContainer">
                    <Link href="" className="save-come">Save Progress And Come Back Later</Link>
                    <button type="button" className="allBtn border">Previous Page</button>
                    <button type="button" className="allBtn dark">Submit for approval</button>
                </div> 
            </form>            
        </div>
    </div>
  );
}

export default SubmitForApprovalPage;

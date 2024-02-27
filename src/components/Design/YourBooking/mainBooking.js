"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DeclineBookingPopup from "@/components/Design/CommonPopup/declineBookingPopup";
import ConfirmAcceptBookingPopup from "@/components/Design/CommonPopup/confirmAcceptBookingPopup";
import AcceptBookingPopup from "@/components/Design/CommonPopup/acceptBookingPopup";
import ConfirmDeclineBookingPopup from "@/components/Design/CommonPopup/confirmDeclineBookingPopup";
import CancelBookingPopup from "@/components/Design/CommonPopup/cancelBookingPopup";
import ConfirmCancelBookingPopup from "@/components/Design/CommonPopup/confirmCancelBookingPopup";
import CancelConfirmationPopup from "@/components/Design/CommonPopup/cancelConfirmationPopup";
import DownArrow from "../../../../public/assets/images/down-arrow.svg"
import BookingRequested from "../../../../public/assets/images/requested-booking.svg"
import OwnnerImage from "../../../../public/assets/images/booking.jpg"
import styles from "./mainBooking.module.scss";

function MainBookingSection() {
  const [open, setOpen] = useState(0);    
  const [ConfirmDeclineBookingIsOpen, SetConfirmDeclineBookingIsOpen] = useState(false);
  const openConfirmDeclineBookingModal = ()=> {
    SetConfirmDeclineBookingIsOpen(true);
  }
  const closeConfirmDeclineBookingModal =()=> {
    SetConfirmDeclineBookingIsOpen(false);
  }

  const [DeclineBookingIsOpen, SetDeclineBookingIsOpen] = useState(false);
  const openDeclineBookingModal = ()=> {
    SetDeclineBookingIsOpen(true);
  }
  const closeDeclineBookingModal =()=> {
    SetDeclineBookingIsOpen(false);
  }
  
  const [AcceptBookingIsOpen, SetAcceptBookingIsOpen] = useState(false);
  const openAcceptBookingModal = ()=> {
    SetAcceptBookingIsOpen(true);
  }
  const closeAcceptBookingModal =()=> {
    SetAcceptBookingIsOpen(false);
  }

  const [ConfirmAcceptBookingIsOpen, SetConfirmAcceptBookingIsOpen] = useState(false);
  const openConfirmAcceptBookingModal = ()=> {
    SetConfirmAcceptBookingIsOpen(true);
  }
  const closeConfirmAcceptBookingModal =()=> {
    SetConfirmAcceptBookingIsOpen(false);
  }

  const [CancelBookingIsOpen, SetCancelBookingIsOpen] = useState(false);
  const openCancelBookingModal = ()=> {
    SetCancelBookingIsOpen(true);
  }
  const closeCancelBookingModal =()=> {
    SetCancelBookingIsOpen(false);
  }

  const [ConfirmCancelBookingIsOpen, SetConfirmCancelBookingIsOpen] = useState(false);
  const openConfirmCancelBookingModal = ()=> {
    SetConfirmCancelBookingIsOpen(true);
  }
  const closeConfirmCancelBookingModal =()=> {
    SetConfirmCancelBookingIsOpen(false);
  }

  const [CancelConfirmationIsOpen, SetCancelConfirmationIsOpen] = useState(false);
  const openCancelConfirmationModal = ()=> {
    SetCancelConfirmationIsOpen(true);
  }
  const closeCancelConfirmationModal =()=> {
    SetCancelConfirmationIsOpen(false);
  }
  return (
    <div className={styles.mainBookingSection}>
      <h3>Requested Bookings</h3>
      <hr/>
      <form>
      <div>
            <label>Search</label>
            <input
            type="text"
            placeholder="Customer Name, Order ID"
            name="search"
            />
        </div>
        <button type="submit">
                <Image
                src="/assets/images/search.svg"
                width={24}
                height={24}
                alt=""
                />
            </button>
      </form>
      <div className="bookingsData">
        <div className="singleBooking">
            <div className="bookingId">
                <h3>Booking #003</h3>
                <button type="button" onClick={openDeclineBookingModal}>Decline Request</button>
                <p>Bright and Light Townhouse – N1</p>
            </div>
            <div className="requestDate">
                <Image src={BookingRequested} height={35} width={35} alt="requested"/>
                <div className="dateTime">
                    <span>Booking Requested</span>
                    <span>Requested on 04th July 2023 by Sarah</span>
                </div>
            </div>
            <button type="button" className={open == 1 ? "accordian openAccordion" : "accordian"} onClick={() => setOpen((open == 1) ? 0 : 1)}>
                <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
            </button>

            <div className="accordionSummary">
              <div className="summaryBox">
                <div className="bookingInfo">
                  <div className="dateTimeBox">
                    <h3>Dates & Times</h3>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Day 1</p>
                      </div>
                      <div className="timeDiv">
                        <p>28/06/24</p>
                        <p>15:00 - 17:00</p>
                      </div>
                    </div>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Day 2</p>
                      </div>
                      <div className="timeDiv">
                        <p>29/06/24</p>
                        <p>11:00 - 14:00</p>
                      </div>
                    </div>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Crew</p>
                      </div>
                      <div className="timeDiv">
                        <p>4 Members</p>
                      </div>
                    </div>
                  </div>
                  <div className="ownerBox">
                  <h3>Requested By</h3>
                  <div className="ownerInfo">
                    <Image src={OwnnerImage} alt="owner-image" height={120} width={120} />
                    <p>Sarah A</p>
                    <span className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                      >
                        <path
                          id="Polygon_1"
                          data-name="Polygon 1"
                          d="M8.5,0l2.125,5.95L17,6.111,11.938,9.95,13.753,16,8.5,12.422,3.247,16,5.062,9.95,0,6.111,6.375,5.95Z"
                          fill="#20535a"
                        />
                      </svg>
                    4.5
                  </span>       
                  </div>
                </div>
                </div>                
                <div className="revenueBox">
                  <h3>Revenue</h3>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Revenue<br/>Collected</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£109.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Styled Home Studios<br/>Commission & Service<br/>Charge</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£23.00<br/>(8%)</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Styled Home Studios VAT<br/>on Commission & Service<br/> Charge</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£4.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Total Styled Home Studio<br/> Fees (Including (VAT)</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£27.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv hostRevenue">
                    <div className="revenueTitle">
                      <p>Host Revenue</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£82.00</p>
                    </div>
                  </div>
                  <button type="button" onClick={openAcceptBookingModal} className="allBtn border dark">Accept request</button>
                </div>                
              </div>
              <div className="messageBox">
                <h3>Messages</h3>
                <div className="messageDetails">
                  <h4>Sarah</h4>
                  <span>25th May 2023 at 9:12 am</span>
                </div>
                <p>Hi, love the property, is there anywhere suitable for us to stay in the surrounding area that you can recommend?</p>
                <form>
                  <div className="inputGroup">
                    <div className="halfDiv">
                      <input type="text" name="type-message" placeholder="Type message" />
                      <button type="button" className="allBtn dark">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>

        <div className="singleBooking">
            <div className="bookingId">
                <h3>Booking #004</h3>
                <button type="button" onClick={openDeclineBookingModal}>Decline Request</button>
                <p>Bright and Light Townhouse – N1</p>
            </div>
            <div className="requestDate">
                <Image src={BookingRequested} height={35} width={35} alt="requested"/>
                <div className="dateTime">
                    <span>Booking Requested</span>
                    <span>Requested on 04th July 2023 by Sarah</span>
                </div>
            </div>
            <button type="button" className={open == 2 ? "accordian openAccordion" : "accordian"} onClick={() => setOpen((open == 2) ? 0 : 2)}>
                <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
            </button>

            <div className="accordionSummary">
              <div className="summaryBox">
                <div className="bookingInfo">
                  <div className="dateTimeBox">
                    <h3>Dates & Times</h3>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Day 1</p>
                      </div>
                      <div className="timeDiv">
                        <p>28/06/24</p>
                        <p>15:00 - 17:00</p>
                      </div>
                    </div>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Day 2</p>
                      </div>
                      <div className="timeDiv">
                        <p>29/06/24</p>
                        <p>11:00 - 14:00</p>
                      </div>
                    </div>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Crew</p>
                      </div>
                      <div className="timeDiv">
                        <p>4 Members</p>
                      </div>
                    </div>
                  </div>
                  <div className="ownerBox">
                  <h3>Requested By</h3>
                  <div className="ownerInfo">
                    <Image src={OwnnerImage} alt="owner-image" height={120} width={120} />
                    <p>Sarah A</p>
                    <span className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                      >
                        <path
                          id="Polygon_1"
                          data-name="Polygon 1"
                          d="M8.5,0l2.125,5.95L17,6.111,11.938,9.95,13.753,16,8.5,12.422,3.247,16,5.062,9.95,0,6.111,6.375,5.95Z"
                          fill="#20535a"
                        />
                      </svg>
                    4.5
                  </span>       
                  </div>
                </div>
                </div>                
                <div className="revenueBox">
                  <h3>Revenue</h3>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Revenue<br/>Collected</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£109.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Styled Home Studios<br/>Commission & Service<br/>Charge</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£23.00<br/>(8%)</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Styled Home Studios VAT<br/>on Commission & Service<br/> Charge</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£4.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Total Styled Home Studio<br/> Fees (Including (VAT)</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£27.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv hostRevenue">
                    <div className="revenueTitle">
                      <p>Host Revenue</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£82.00</p>
                    </div>
                  </div>
                  <button type="button" onClick={openAcceptBookingModal} className="allBtn border dark">Accept request</button>
                </div>                
              </div>
              <div className="messageBox">
                <h3>Messages</h3>
                <div className="messageDetails">
                  <h4>Sarah</h4>
                  <span>25th May 2023 at 9:12 am</span>
                </div>
                <p>Hi, love the property, is there anywhere suitable for us to stay in the surrounding area that you can recommend?</p>
                <form>
                  <div className="inputGroup">
                    <div className="halfDiv">
                      <input type="text" name="type-message" placeholder="Type message" />
                      <button type="button" className="allBtn dark">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>

        <div className="singleBooking confirmBooking">
            <div className="bookingId">
                <h3>Booking #005</h3>
                <button type="button" onClick={openCancelBookingModal}>Cancel Booking</button>
                <p>Bright and Light Townhouse – N1</p>
            </div>
            <div className="requestDate">
                <Image src={BookingRequested} height={35} width={35} alt="requested"/>
                <div className="dateTime">
                    <span>Booking Confirmed</span>
                    <span>Requested on 04th July 2023 by Sarah</span>
                </div>
            </div>
            <button type="button" className={open == 3 ? "accordian openAccordion" : "accordian"} onClick={() => setOpen((open == 3) ? 0 : 3)}>
                <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
            </button>

            <div className="accordionSummary">
              <div className="summaryBox">
                <div className="bookingInfo">
                  <div className="dateTimeBox">
                    <h3>Dates & Times</h3>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Day 1</p>
                      </div>
                      <div className="timeDiv">
                        <p>28/06/24</p>
                        <p>15:00 - 17:00</p>
                      </div>
                    </div>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Day 2</p>
                      </div>
                      <div className="timeDiv">
                        <p>29/06/24</p>
                        <p>11:00 - 14:00</p>
                      </div>
                    </div>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Crew</p>
                      </div>
                      <div className="timeDiv">
                        <p>4 Members</p>
                      </div>
                    </div>
                  </div>
                  <div className="ownerBox">
                  <h3>Requested By</h3>
                  <div className="ownerInfo">
                    <Image src={OwnnerImage} alt="owner-image" height={120} width={120} />
                    <p>Sarah A</p>
                    <span className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                      >
                        <path
                          id="Polygon_1"
                          data-name="Polygon 1"
                          d="M8.5,0l2.125,5.95L17,6.111,11.938,9.95,13.753,16,8.5,12.422,3.247,16,5.062,9.95,0,6.111,6.375,5.95Z"
                          fill="#20535a"
                        />
                      </svg>
                    4.5
                  </span>       
                  </div>
                </div>
                </div>                
                <div className="revenueBox">
                  <h3>Revenue</h3>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Revenue<br/>Collected</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£109.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Styled Home Studios<br/>Commission & Service<br/>Charge</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£23.00<br/>(8%)</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Styled Home Studios VAT<br/>on Commission & Service<br/> Charge</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£4.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Total Styled Home Studio<br/> Fees (Including (VAT)</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£27.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv hostRevenue">
                    <div className="revenueTitle">
                      <p>Host Revenue</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£82.00</p>
                    </div>
                  </div>
                  <div className="buttonContainer">
                    <button type="button" onClick={openAcceptBookingModal} className="allBtn border dark">Resend Confirmation</button>
                    <Link href="">Download Statement</Link>
                  </div>
                  
                </div>                
              </div>
              <div className="messageBox">
                <h3>Messages</h3>
                <div className="messageDetails">
                  <h4>Sarah</h4>
                  <span>25th May 2023 at 9:12 am</span>
                  <p>Hi, love the property, is there anywhere suitable for us to stay in the surrounding area that you can recommend?</p>
                </div>
                <hr/>
                <div className="messageDetails">
                  <h4>Fabien</h4>
                  <span>25th May 2023 at 9:50 am</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>                
                <form>
                  <div className="inputGroup">
                    <div className="halfDiv">
                      <input type="text" name="type-message" placeholder="Type message" />
                      <button type="button" className="allBtn dark">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>

        <div className="singleBooking confirmBooking">
            <div className="bookingId">
                <h3>Booking #006</h3>
                <button type="button" onClick={openCancelBookingModal}>Cancel Booking</button>
                <p>Bright and Light Townhouse – N1</p>
            </div>
            <div className="requestDate">
                <Image src={BookingRequested} height={35} width={35} alt="requested"/>
                <div className="dateTime">
                    <span>Booking Confirmed</span>
                    <span>Requested on 04th July 2023 by Sarah</span>
                </div>
            </div>
            <button type="button" className={open == 4 ? "accordian openAccordion" : "accordian"} onClick={() => setOpen((open == 4) ? 0 : 4)}>
                <Image src={DownArrow} alt="down-arrow" height={10} width={18}/>
            </button>

            <div className="accordionSummary">
              <div className="summaryBox">
                <div className="bookingInfo">
                  <div className="dateTimeBox">
                    <h3>Dates & Times</h3>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Day 1</p>
                      </div>
                      <div className="timeDiv">
                        <p>28/06/24</p>
                        <p>15:00 - 17:00</p>
                      </div>
                    </div>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Day 2</p>
                      </div>
                      <div className="timeDiv">
                        <p>29/06/24</p>
                        <p>11:00 - 14:00</p>
                      </div>
                    </div>
                    <div className="dayCrew">
                      <div className="dayDiv">
                        <p>Crew</p>
                      </div>
                      <div className="timeDiv">
                        <p>4 Members</p>
                      </div>
                    </div>
                  </div>
                  <div className="ownerBox">
                  <h3>Requested By</h3>
                  <div className="ownerInfo">
                    <Image src={OwnnerImage} alt="owner-image" height={120} width={120} />
                    <p>Sarah A</p>
                    <span className="rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                      >
                        <path
                          id="Polygon_1"
                          data-name="Polygon 1"
                          d="M8.5,0l2.125,5.95L17,6.111,11.938,9.95,13.753,16,8.5,12.422,3.247,16,5.062,9.95,0,6.111,6.375,5.95Z"
                          fill="#20535a"
                        />
                      </svg>
                    4.5
                  </span>       
                  </div>
                </div>
                </div>                
                <div className="revenueBox">
                  <h3>Revenue</h3>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Revenue<br/>Collected</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£109.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Styled Home Studios<br/>Commission & Service<br/>Charge</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£23.00<br/>(8%)</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Styled Home Studios VAT<br/>on Commission & Service<br/> Charge</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£4.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv">
                    <div className="revenueTitle">
                      <p>Total Styled Home Studio<br/> Fees (Including (VAT)</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£27.60</p>
                    </div>
                  </div>
                  <div className="revenueDiv hostRevenue">
                    <div className="revenueTitle">
                      <p>Host Revenue</p>
                    </div>
                    <div className="revenuePrice">
                      <p>£82.00</p>
                    </div>
                  </div>
                  <div className="buttonContainer">
                    <button type="button" onClick={openAcceptBookingModal} className="allBtn border dark">Resend Confirmation</button>
                    <Link href="">Download Statement</Link>
                  </div>
                  
                </div>                
              </div>
              <div className="messageBox">
                <h3>Messages</h3>
                <div className="messageDetails">
                  <h4>Sarah</h4>
                  <span>25th May 2023 at 9:12 am</span>
                  <p>Hi, love the property, is there anywhere suitable for us to stay in the surrounding area that you can recommend?</p>
                </div>
                <hr/>
                <div className="messageDetails">
                  <h4>Fabien</h4>
                  <span>25th May 2023 at 9:50 am</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>                
                <form>
                  <div className="inputGroup">
                    <div className="halfDiv">
                      <input type="text" name="type-message" placeholder="Type message" />
                      <button type="button" className="allBtn dark">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>

        <button type="button" className="allBtn dark border">Load More</button>
      </div>
      <DeclineBookingPopup openConfirmDeclineBookingModal={openConfirmDeclineBookingModal} DeclineBookingIsOpen={DeclineBookingIsOpen} closeDeclineBookingModal={closeDeclineBookingModal} />
      <AcceptBookingPopup openConfirmAcceptBookingModal={openConfirmAcceptBookingModal} AcceptBookingIsOpen={AcceptBookingIsOpen} closeAcceptBookingModal={closeAcceptBookingModal} />
      <ConfirmAcceptBookingPopup ConfirmAcceptBookingIsOpen={ConfirmAcceptBookingIsOpen} closeConfirmAcceptBookingModal={closeConfirmAcceptBookingModal}  />
      <ConfirmDeclineBookingPopup ConfirmDeclineBookingIsOpen={ConfirmDeclineBookingIsOpen} closeConfirmDeclineBookingModal={closeConfirmDeclineBookingModal} />

      <CancelBookingPopup openConfirmCancelBookingModal={openConfirmCancelBookingModal} CancelBookingIsOpen={CancelBookingIsOpen} closeCancelBookingModal={closeCancelBookingModal} />
      <ConfirmCancelBookingPopup openCancelConfirmationModal={openCancelConfirmationModal} ConfirmCancelBookingIsOpen={ConfirmCancelBookingIsOpen} closeConfirmCancelBookingModal={closeConfirmCancelBookingModal}  />
      <CancelConfirmationPopup CancelConfirmationIsOpen={CancelConfirmationIsOpen} closeCancelConfirmationModal={closeCancelConfirmationModal}  />
    </div>
  );
}

export default MainBookingSection;

"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./customerMessagesBox.module.scss";

function CustomerMessagesBox() {
  const [isActiveMessages, setIsActiveMessages] = useState(false);
  const handleClickMessages = () => {
    setIsActiveMessages(!isActiveMessages);
  };

  const [isActiveConversation, setIsActiveConversation] = useState(false);
  const elementRef = useRef(null);
  const handleClickConversation = () => {
    setIsActiveConversation(!isActiveConversation);
    if (elementRef.current) {
      elementRef.current.classList.remove("show");
    }
  };

  const [isActiveBooking, setIsActiveBooking] = useState(false);
  const elementRef1 = useRef(null);
  const handleClickBooking = () => {
    setIsActiveBooking(!isActiveBooking);
    if (elementRef1.current) {
      elementRef1.current.classList.remove("hide");
    }
  };

  return (
    <section className={styles.customerMessagesBox}>
      <div className="container">
        <div className="mainMsgBox">
          <div
            ref={elementRef1}
            className={`${"msgList"} ${isActiveMessages ? "hide" : ""}`}
          >
            <div className="titleBox" onClick={handleClickMessages}>
              Messages
            </div>
            <div className="allMsg">
              <div className="subList">
                <div className="msgBox newMsg">
                  <h6>Booking Confirmed</h6>
                  <div className="title">
                    <span>Fabien A</span>
                    <span>9:12 am</span>
                  </div>
                  <p>
                    Thank you for booking. Of course, there is a local Inn in
                    the village called The Yew Tree.
                  </p>
                </div>
                <div className="msgBox">
                  <h6>Booking Confirmed</h6>
                  <div className="title">
                    <span>Fabien A</span>
                    <span>9:12 am</span>
                  </div>
                  <p>
                    Thank you for booking. Of course, there is a local Inn in
                    the village called The Yew Tree.
                  </p>
                </div>
                <div className="msgBox">
                  <h6>Booking Confirmed</h6>
                  <div className="title">
                    <span>Fabien A</span>
                    <span>9:12 am</span>
                  </div>
                  <p>
                    Thank you for booking. Of course, there is a local Inn in
                    the village called The Yew Tree.
                  </p>
                </div>
                <div className="msgBox">
                  <h6>Booking Confirmed</h6>
                  <div className="title">
                    <span>Fabien A</span>
                    <span>9:12 am</span>
                  </div>
                  <p>
                    Thank you for booking. Of course, there is a local Inn in
                    the village called The Yew Tree.
                  </p>
                </div>
                <div className="msgBox">
                  <h6>Booking Confirmed</h6>
                  <div className="title">
                    <span>Fabien A</span>
                    <span>9:12 am</span>
                  </div>
                  <p>
                    Thank you for booking. Of course, there is a local Inn in
                    the village called The Yew Tree.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={elementRef}
            className={`${"msgList conversationList"} ${
              isActiveMessages ? "show" : ""
            }`}
          >
            {/* <span className="mobileLink link">Back To Messages</span> */}
            <div className="titleBox" onClick={handleClickConversation}>
              Conversation With Fabien
            </div>
            <div className="allMsg">
              <div className="subList">
                <div className="msgBox conversationBox">
                  <h5>5th July 2023</h5>
                  <div className="dilogBox">
                    <Image
                      src="/assets/images/booking.jpg"
                      width={75}
                      height={75}
                      alt=""
                    />
                    <div>
                      <div className="title">
                        <span>Sarah A</span>
                        <span>10:39 am</span>
                      </div>
                      <p>
                        Hi, love the property, is there anywhere suitable for us
                        to stay in the surrounding area that you can recommend?s
                      </p>
                    </div>
                  </div>
                  <div className="dilogNote">
                    <p>
                      Your Booking Is Confirmed For 28th June 2024 And 29th June
                      2024
                    </p>
                    <Link href="#">View Reservation</Link>
                  </div>
                  <div className="dilogBox">
                    <Image
                      src="/assets/images/booking.jpg"
                      width={75}
                      height={75}
                      alt=""
                    />
                    <div>
                      <div className="title">
                        <span>Sarah A</span>
                        <span>10:39 am</span>
                      </div>
                      <p>
                        Hi, love the property, is there anywhere suitable for us
                        to stay in the surrounding area that you can recommend?s
                      </p>
                    </div>
                  </div>
                  <div className="dilogBox">
                    <Image
                      src="/assets/images/booking.jpg"
                      width={75}
                      height={75}
                      alt=""
                    />
                    <div>
                      <div className="title">
                        <span>Sarah A</span>
                        <span>10:39 am</span>
                      </div>
                      <p>
                        Hi, love the property, is there anywhere suitable for us
                        to stay in the surrounding area that you can recommend?s
                      </p>
                    </div>
                  </div>
                  <div className="dilogBox">
                    <Image
                      src="/assets/images/booking.jpg"
                      width={75}
                      height={75}
                      alt=""
                    />
                    <div>
                      <div className="title">
                        <span>Sarah A</span>
                        <span>10:39 am</span>
                      </div>
                      <p>
                        Hi, love the property, is there anywhere suitable for us
                        to stay in the surrounding area that you can recommend?s
                      </p>
                    </div>
                  </div>
                  <div className="dilogNote">
                    <p>
                      Your Booking Is Confirmed For 28th June 2024 And 29th June
                      2024
                    </p>
                    <Link href="#">View Reservation</Link>
                  </div>
                </div>
                <div className="typeMsg">
                  <form>
                    <input type="text" placeholder="Type message" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${"msgList bookingList"} ${
              isActiveConversation ? "show" : ""
            }`}
          >
            <div className="titleBox">
              <span>Booking Details</span>

              <span className="link" onClick={handleClickBooking}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10.012"
                  height="10.012"
                  viewBox="0 0 10.012 10.012"
                >
                  <g
                    id="Group_4550"
                    data-name="Group 4550"
                    transform="translate(0.53 0.53)"
                  >
                    <path
                      id="Path_3990"
                      data-name="Path 3990"
                      d="M8.951,0,0,8.951"
                      transform="translate(0 8.951) rotate(-90)"
                      fill="none"
                      stroke="#20535a"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_4026"
                      data-name="Path 4026"
                      d="M8.951,8.951,0,0"
                      transform="translate(0 8.951) rotate(-90)"
                      fill="none"
                      stroke="#20535a"
                      stroke-width="1.5"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <div className="allMsg">
              <div className="subList">
                <div className="msgBox bookingBox">
                  <div className="viewBox">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="41.18"
                      height="41.18"
                      viewBox="0 0 41.18 41.18"
                    >
                      <g
                        id="Group_4644"
                        data-name="Group 4644"
                        transform="translate(-1756.278 -66.278)"
                      >
                        <g
                          id="Group_4421"
                          data-name="Group 4421"
                          transform="translate(1756.278 66.278)"
                        >
                          <g
                            id="Group_4420"
                            data-name="Group 4420"
                            transform="translate(11.543 11.019)"
                          >
                            <g
                              id="Group_4419"
                              data-name="Group 4419"
                              transform="translate(0 16.795) rotate(-90)"
                            >
                              <path
                                id="Path_613"
                                data-name="Path 613"
                                d="M9.228,0l9.39,6.727V16.795H0V6.727Z"
                                transform="translate(16.795) rotate(90)"
                                fill="none"
                                stroke="#fff"
                                stroke-width="1.2"
                              />
                            </g>
                            <text
                              id="_"
                              data-name="!"
                              transform="translate(7.918 2.335)"
                              fill="#fff"
                              font-size="11"
                              font-family="Montserrat-Medium, Montserrat"
                              font-weight="500"
                            >
                              <tspan x="0" y="11">
                                !
                              </tspan>
                            </text>
                          </g>
                          <g
                            id="Ellipse_24"
                            data-name="Ellipse 24"
                            transform="translate(0 0)"
                            fill="none"
                            stroke="#fff"
                            stroke-width="1.2"
                          >
                            <circle
                              cx="20.59"
                              cy="20.59"
                              r="20.59"
                              stroke="none"
                            />
                            <circle
                              cx="20.59"
                              cy="20.59"
                              r="19.99"
                              fill="none"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div>
                      <span>Booking Requested</span>
                      <span>Requested on 04th July 2023 by Sarah</span>
                    </div>
                  </div>
                  <div className="bookingAll">
                    <Image
                      src="/assets/images/trending.png"
                      alt=""
                      width={474}
                      height={325}
                    />
                    <div className="infoBox">
                      <h3>Bright and Light Townhouse – N1</h3>
                      <Link href="#">View Listing</Link>
                    </div>
                    <div className="listInfo">
                      <div>
                        <span>Your Crew</span>
                        <span>4 People</span>
                      </div>
                      <div>
                        <span>Booking</span>
                        <span>
                          <div>
                            <span>28/06/24 15:00 - 17:00</span>
                            <span>29/06/24 11:00 - 14:00</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <Link href="#" className="allBtn border dark">
                      View booking
                    </Link>
                  </div>

                  <div className="bookingAll">
                    <Image
                      src="/assets/images/trending.png"
                      alt=""
                      width={474}
                      height={325}
                    />
                    <div className="infoBox">
                      <h3>Bright and Light Townhouse – N1</h3>
                      <Link href="#">View Listing</Link>
                    </div>
                    <div className="listInfo">
                      <div>
                        <span>Your Crew</span>
                        <span>4 People</span>
                      </div>
                      <div>
                        <span>Booking</span>
                        <span>
                          <div>
                            <span>28/06/24 15:00 - 17:00</span>
                            <span>29/06/24 11:00 - 14:00</span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <Link href="#" className="allBtn border dark">
                      View booking
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerMessagesBox;

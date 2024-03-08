"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./customerMessagesBox.module.scss";

function CustomerMessagesBox() {
  return (
    <section className={styles.customerMessagesBox}>
      <div className="container">
        <div className="mainMsgBox">
          <div className="msgList">
            <div className="titleBox">Messages</div>
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
          <div className="msgList conversationList">
            <div className="titleBox">Conversation With Fabien</div>
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
          <div className="msgList bookingList">
            <div className="titleBox">Booking Details</div>
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
                  <div className="bookingList">
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
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque tincidunt nibh et diam consequat, ut laoreet nulla
                    pretium. Fusce laoreet, dui eget tempus iaculis, nunc ipsum
                    viverra enim, a vehicula tortor est eget augue. Proin
                    interdum pharetra quam, eu gravida ex tempor sit amet. Proin
                    feugiat magna vel ante imperdiet tincidunt. Morbi eget
                    pellentesque enim. Duis faucibus, tellus vitae eleifend
                    tempor, tortor turpis laoreet eros, quis vehicula purus
                    lorem id ante. Aliquam scelerisque vestibulum tortor,
                    laoreet dictum felis facilisis vitae. In id dui et magna
                    congue sollicitudin. Aenean id dapibus ipsum. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Quisque
                    tincidunt nibh et diam consequat, ut laoreet nulla pretium.
                    Fusce laoreet, dui eget tempus iaculis, nunc ipsum viverra
                    enim, a vehicula tortor est eget augue. Proin interdum
                    pharetra quam, eu gravida ex tempor sit amet. Proin feugiat
                    magna vel ante imperdiet tincidunt. Morbi eget pellentesque
                    enim. Duis faucibus, tellus vitae eleifend tempor, tortor
                    turpis laoreet eros, quis vehicula purus lorem id ante.
                    Aliquam scelerisque vestibulum tortor, laoreet dictum felis
                    facilisis vitae. In id dui et magna congue sollicitudin.
                    Aenean id dapibus ipsum.
                  </p>
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

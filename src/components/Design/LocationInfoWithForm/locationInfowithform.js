"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./locationInfowithform.module.scss";

function LocationInfowithform() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <section className={styles.locationInfowithform}>
      <div className="container">
        <div className="row">
          <div className="formLeft">
            <div className="title">
              <h2>Available Spaces</h2>
              <a href="#">View All 30</a>
            </div>
            <div className="allAvalible">
              <div>
                <Image src="/assets/images/Garden.svg" width={32} height={42} />
                <span>Garden</span>
              </div>
              <div>
                <Image
                  src="/assets/images/Kitchen.svg"
                  width={32}
                  height={42}
                />
                <span>Kitchen</span>
              </div>
              <div>
                <Image
                  src="/assets/images/Bedroom.svg"
                  width={32}
                  height={42}
                />
                <span>4 x Bedrooms</span>
              </div>
              <div>
                <Image src="/assets/images/Shower.svg" width={32} height={42} />
                <span>2 x Bathrooms</span>
              </div>
              <div>
                <Image src="/assets/images/Garden.svg" width={32} height={42} />
                <span>Garden</span>
              </div>
              <div>
                <Image
                  src="/assets/images/Kitchen.svg"
                  width={32}
                  height={42}
                />
                <span>Kitchen</span>
              </div>
            </div>

            <h2>Avalible For</h2>
            <div className="allAvalible tick">
              <div>
                <Image src="/assets/images/Tick.svg" width={32} height={42} />
                <span>Photoshoots and Film</span>
              </div>
              <div>
                <Image src="/assets/images/Tick.svg" width={32} height={42} />
                <span>Corporate Events</span>
              </div>
            </div>

            <div className="mainAccordion">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                defaultExpanded
              >
                <AccordionSummary
                  expandIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.319"
                      height="8.659"
                      viewBox="0 0 15.319 8.659"
                    >
                      <path
                        id="Path_3990"
                        data-name="Path 3990"
                        d="M6.952,0,0,6.952,6.952,13.9"
                        transform="translate(0.707 7.659) rotate(-90)"
                        fill="none"
                        stroke="#20535a"
                        stroke-width="2"
                      />
                    </svg>
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>Parking</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h4>Parking </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.319"
                      height="8.659"
                      viewBox="0 0 15.319 8.659"
                    >
                      <path
                        id="Path_3990"
                        data-name="Path 3990"
                        d="M6.952,0,0,6.952,6.952,13.9"
                        transform="translate(0.707 7.659) rotate(-90)"
                        fill="none"
                        stroke="#20535a"
                        stroke-width="2"
                      />
                    </svg>
                  }
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography>Lighting</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h4>Lighting</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.319"
                      height="8.659"
                      viewBox="0 0 15.319 8.659"
                    >
                      <path
                        id="Path_3990"
                        data-name="Path 3990"
                        d="M6.952,0,0,6.952,6.952,13.9"
                        transform="translate(0.707 7.659) rotate(-90)"
                        fill="none"
                        stroke="#20535a"
                        stroke-width="2"
                      />
                    </svg>
                  }
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  <Typography>Sound</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h4>Sound </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.319"
                      height="8.659"
                      viewBox="0 0 15.319 8.659"
                    >
                      <path
                        id="Path_3990"
                        data-name="Path 3990"
                        d="M6.952,0,0,6.952,6.952,13.9"
                        transform="translate(0.707 7.659) rotate(-90)"
                        fill="none"
                        stroke="#20535a"
                        stroke-width="2"
                      />
                    </svg>
                  }
                  aria-controls="panel4-content"
                  id="panel4-header"
                >
                  <Typography>Accessibility</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h4>Accessibility </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.319"
                      height="8.659"
                      viewBox="0 0 15.319 8.659"
                    >
                      <path
                        id="Path_3990"
                        data-name="Path 3990"
                        d="M6.952,0,0,6.952,6.952,13.9"
                        transform="translate(0.707 7.659) rotate(-90)"
                        fill="none"
                        stroke="#20535a"
                        stroke-width="2"
                      />
                    </svg>
                  }
                  aria-controls="panel5-content"
                  id="panel5-header"
                >
                  <Typography>Amenities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h4>Amenities </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.319"
                      height="8.659"
                      viewBox="0 0 15.319 8.659"
                    >
                      <path
                        id="Path_3990"
                        data-name="Path 3990"
                        d="M6.952,0,0,6.952,6.952,13.9"
                        transform="translate(0.707 7.659) rotate(-90)"
                        fill="none"
                        stroke="#20535a"
                        stroke-width="2"
                      />
                    </svg>
                  }
                  aria-controls="panel6-content"
                  id="panel6-header"
                >
                  <Typography>House Rules</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h4>House Rules</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationInfowithform;

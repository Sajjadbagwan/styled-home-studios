"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./locationFaq.module.scss";

function LocationFaq() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <section className={styles.locationFaq}>
      <div className="container">
        <div className="row">
          <div className="formLeft">
            <div className="title">
              <h2>Frequently Asked Questions</h2>
              <a href="#">View All FAQs</a>
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
                  <Typography>
                    FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur
                    Adipiscing
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                  <Typography>
                    FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur
                    Adipiscing
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
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
                  <Typography>
                    FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur
                    Adipiscing
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                  <Typography>
                    FAQ Question Goes Here Lorem Ipsum Dolor Sit Amet Onsectetur
                    Adipiscing
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
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

export default LocationFaq;

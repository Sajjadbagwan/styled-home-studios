"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import YourServiceDetails from "@/components/Design/JoinDirectorySection/yourServiceDetails";
import JoinDirectoryBilling from "@/components/Design/JoinDirectorySection/joinDirectoryBilling";
import SubmitForApprovalPage from "@/components/Design/JoinDirectorySection/submitForApproval";
import styles from "./joinDirectorySection.module.scss";

function JoinTheDirectorySection() {
  
  return (
    <div className={styles.joinTheDirectorySection}>
      <div className="container">
        <ul className="steps">
          <li className="singlestep activeStep">
            <Link href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="40.112" height="36.549" viewBox="0 0 40.112 36.549">
                  <g id="Group_4679" data-name="Group 4679" transform="translate(0.85 1.049)">
                    <g id="Group_4419" data-name="Group 4419" transform="translate(0 34.65) rotate(-90)">
                      <path id="Path_613" data-name="Path 613" d="M19.039,0,38.412,13.878V34.651H0V13.878Z" transform="translate(34.651) rotate(90)" fill="#fff" stroke="#20535a" stroke-width="1.7"/>
                    </g>
                  </g>
                </svg>
              <span>1</span>
            </Link>
            <h4>Service Details</h4>
          </li>
          <li className="singlestep">
            <Link href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="40.112" height="36.549" viewBox="0 0 40.112 36.549">
                  <g id="Group_4679" data-name="Group 4679" transform="translate(0.85 1.049)">
                    <g id="Group_4419" data-name="Group 4419" transform="translate(0 34.65) rotate(-90)">
                      <path id="Path_613" data-name="Path 613" d="M19.039,0,38.412,13.878V34.651H0V13.878Z" transform="translate(34.651) rotate(90)" fill="#fff" stroke="#20535a" stroke-width="1.7"/>
                    </g>
                  </g>
                </svg>
              <span>2</span>
            </Link>
            <h4>Billing</h4>
          </li>
          <li className="singlestep">
            <Link href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="40.112" height="36.549" viewBox="0 0 40.112 36.549">
                  <g id="Group_4679" data-name="Group 4679" transform="translate(0.85 1.049)">
                    <g id="Group_4419" data-name="Group 4419" transform="translate(0 34.65) rotate(-90)">
                      <path id="Path_613" data-name="Path 613" d="M19.039,0,38.412,13.878V34.651H0V13.878Z" transform="translate(34.651) rotate(90)" fill="#fff" stroke="#20535a" stroke-width="1.7"/>
                    </g>
                  </g>
                </svg>
              <span>3</span>
            </Link>
            <h4>Send For Approval</h4>
          </li>
        </ul>
        <YourServiceDetails />
        <JoinDirectoryBilling />
        <SubmitForApprovalPage />
      </div>
    </div>
  );
}

export default JoinTheDirectorySection;

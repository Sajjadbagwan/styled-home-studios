"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./confirmPropertyDetailsForm.module.scss";
import ConfirmPropertyDetailsStep1 from "@/components/Design/ConfirmPropertyDetailsForm/confirmProperyDetailsStep1";
import ConfirmPropertyDetailsStep2 from "@/components/Design/ConfirmPropertyDetailsForm/confirmProperyDetailsStep2";
import ConfirmPropertyDetailsStep3 from "@/components/Design/ConfirmPropertyDetailsForm/confirmProperyDetailsStep3";
import ConfirmPropertyDetailsStep4 from "@/components/Design/ConfirmPropertyDetailsForm/confirmProperyDetailsStep4";
import ConfirmPropertyDetailsStep5 from "@/components/Design/ConfirmPropertyDetailsForm/confirmProperyDetailsStep5";
import ConfirmPropertyDetailsStep6 from "@/components/Design/ConfirmPropertyDetailsForm/confirmProperyDetailsStep6";
import ConfirmPropertyDetailsStep7 from "@/components/Design/ConfirmPropertyDetailsForm/confirmProperyDetailsStep7";

function ConfirmPropertyDetailsForm() {
  
  return (
    <div className={styles.confirmPropertyDetailsForm}>
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
            <h4>Property Details</h4>
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
            <h4>Pricing</h4>
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
            <h4>Spacing</h4>
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
              <span>4</span>
            </Link>
            <h4>Style</h4>
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
              <span>5</span>
            </Link>
            <h4>Colours & Materials</h4>
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
              <span>6</span>
            </Link>
            <h4>Amenities</h4>
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
              <span>7</span>
            </Link>
            <h4>Rules</h4>
          </li>
        </ul>
        <form>
          <ConfirmPropertyDetailsStep1 />
          <ConfirmPropertyDetailsStep2 /> 
          <ConfirmPropertyDetailsStep3 /> 
          <ConfirmPropertyDetailsStep4 />
          <ConfirmPropertyDetailsStep5 /> 
          <ConfirmPropertyDetailsStep6 />
          <ConfirmPropertyDetailsStep7 />
        </form>
      </div>
    </div>
  );
}

export default ConfirmPropertyDetailsForm;

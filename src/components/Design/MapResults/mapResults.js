"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./mapResults.module.scss";

function MapResults() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickPopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Link onClick={handleClickPopup} href="#" className="allBtn dark border">
        Show results as map
      </Link>

      {isOpen && (
        <div className={styles.mainMap}>
          <div className="innerMap">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14690.907570789997!2d72.50903039999999!3d22.997068249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708523522247!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </div>
      )}
    </>
  );
}

export default MapResults;

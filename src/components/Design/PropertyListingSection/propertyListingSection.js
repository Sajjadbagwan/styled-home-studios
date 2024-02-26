"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VerifyIdentityPopup from "@/components/Design/CommonPopup/verifyIdentity";
import RemovePropertyPopup from "@/components/Design/CommonPopup/removePropertyPopup";
import DeactivatePropertyPopup from "@/components/Design/CommonPopup/deactivatePropertyPopup";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";
import Listing1 from "../../../../public/assets/images/listing1.jpg";
import Listing2 from "../../../../public/assets/images/listing2.jpg";
import Listing3 from "../../../../public/assets/images/listing3.jpg";
import NewProperty from "../../../../public/assets/images/new-property.jpg";
import AddNewIcon from "../../../../public/assets/images/add-property-icon.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./propertyListingSection.module.scss";

function PropertyListingSection() {
    const [VerifyIdentityIsOpen, SetVerifyIdentityIsOpen] = useState(false);
    const [RemovePropertyIsOpen, SetRemovePropertyIsOpen] = useState(false);
    const [DeactivatePropertyIsOpen, SetDeactivatePropertyIsOpen] = useState(false);
    const openVerifyIdentityModal = ()=> {
      SetVerifyIdentityIsOpen(true);
    }
    const closeVerifyIdentityModal =()=> {
      SetVerifyIdentityIsOpen(false);
    }

    const openRemovePropertyModal = ()=> {
      SetRemovePropertyIsOpen(true);
    }
    const closeRemovePropertyModal =()=> {
      SetRemovePropertyIsOpen(false);
    }

    const openDeactivatePropertyodal = ()=> {
      SetDeactivatePropertyIsOpen(true);
    }
    const closeDeactivatePropertyodal =()=> {
      SetDeactivatePropertyIsOpen(false);
    }
      const innersettings = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
      };
  return (
    <div className={styles.propertyListingSection}>
      <div className="container">
      <EqualHeight>
        <div className="allLocation sliderDots">
            <div className="slide">
              <div className="slideImg">
                <span className="category awaiting">Awaiting approval</span>
                <Slider {...innersettings} className="subLocation">
                    <Image src={Listing1} alt="listing" height={325} width={474}/>
                    <Image src={Listing2} alt="listing1" height={325} width={474}/>
                    <Image src={Listing3} alt="listing2" height={325} width={474}/>                 
                </Slider>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                  <EqualHeightElement name="title">
                    <h3>ELEGANT EDINBURGH TOWNHOUSE - EH15</h3>   
                  </EqualHeightElement>               
                </div>
                <div className="subDetail">
                  <p>Area: Edinburgh</p>
                  <p>£100 Per Hour</p>
                </div>
                <Link href="" className="allBtn dark border">View Submission</Link>
                <button className="normalLink" type="button" onClick={openRemovePropertyModal}>Cancel Application</button>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <span className="category incomplete">Property Incomplete</span>
                <Slider {...innersettings} className="subLocation">
                    <Image src={Listing1} alt="listing" height={325} width={474}/>
                    <Image src={Listing2} alt="listing1" height={325} width={474}/>
                    <Image src={Listing3} alt="listing2" height={325} width={474}/>                 
                </Slider>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <EqualHeightElement name="title">
                        <h3>Sophisticated Air - SW15</h3>  
                    </EqualHeightElement>                
                </div>
                <div className="subDetail">
                  <p>Area: South West</p>
                  <p>£215 Per Hour</p>
                </div>
                <button type="button" onClick={openVerifyIdentityModal} className="allBtn dark border">Complete listing</button>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <span className="category active">Property Active</span>
                <Slider {...innersettings} className="subLocation">
                    <Image src={Listing1} alt="listing" height={325} width={474}/>
                    <Image src={Listing2} alt="listing1" height={325} width={474}/>
                    <Image src={Listing3} alt="listing2" height={325} width={474}/>                 
                </Slider>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <EqualHeightElement name="title">
                        <h3>ELEGANT EDINBURGH TOWNHOUSE - EH15</h3> 
                    </EqualHeightElement>
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
                <div className="subDetail">
                  <p>Area: Edinburgh</p>
                  <p>£100 Per Hour</p>
                </div>
                <Link href="">View Listing</Link>
                <Link href="" className="allBtn dark border">Edit Listing</Link>
                <Link href="" className="allBtn border">View bookings</Link>
                <button type="button" className="normalLink" onClick={openDeactivatePropertyodal}>Deactivate</button>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <span className="category declined">Property Declined</span>
                <Slider {...innersettings} className="subLocation">
                    <Image src={Listing1} alt="listing" height={325} width={474}/>
                    <Image src={Listing2} alt="listing1" height={325} width={474}/>
                    <Image src={Listing3} alt="listing2" height={325} width={474}/>                 
                </Slider>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <EqualHeightElement name="title">
                        <h3>Enchanted Modern Elegance - RG42</h3>   
                    </EqualHeightElement>               
                </div>
                <div className="subDetail">
                  <p>Area: Berkshire</p>
                  <p>£130 Per Hour</p>
                </div>
                <Link href="" className="allBtn dark border">View feedback & Resubmit</Link>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg permenantDeclined">
                <span className="category declined">Property Permanently Declined</span>
                <Slider {...innersettings} className="subLocation">
                    <Image src={Listing1} alt="listing" height={325} width={474}/>
                    <Image src={Listing2} alt="listing1" height={325} width={474}/>
                    <Image src={Listing3} alt="listing2" height={325} width={474}/>                 
                </Slider>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <EqualHeightElement name="title">
                        <h3>RIVERSIDE STUDIO –BA2</h3>    
                    </EqualHeightElement>              
                </div>
                {/* <div className="subDetail">
                  <p>Area: Edinburgh</p>
                  <p>£100 Per Hour</p>
                </div> */}
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <span className="category inactive">Property Inactive</span>
                <Slider {...innersettings} className="subLocation">
                    <Image src={Listing1} alt="listing" height={325} width={474}/>
                    <Image src={Listing2} alt="listing1" height={325} width={474}/>
                    <Image src={Listing3} alt="listing2" height={325} width={474}/>                 
                </Slider>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <EqualHeightElement name="title">
                        <h3>ELEGANT EDINBURGH TOWNHOUSE - EH15</h3>    
                    </EqualHeightElement>             
                </div>
                <div className="subDetail">
                  <p>Area: Edinburgh</p>
                  <p>£150 Per Hour</p>
                </div>
                <Link href="" className="allBtn dark border">Request to pUblish</Link>
                <Link href="" className="allBtn border">View bookings</Link>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={NewProperty} alt="listing" height={770} width={474}/>
              </div>
              <div className="addNew">
                <Link href="">
                  <Image src={AddNewIcon} alt="addnew-icon" height={85} width={85} />
                  Add New Property
                </Link>
                <p>Submit a new property to be listed</p>
              </div>
            </div>
        </div>
      </EqualHeight>
      <VerifyIdentityPopup VerifyIdentityIsOpen={VerifyIdentityIsOpen} closeVerifyIdentityModal={closeVerifyIdentityModal} />
      <RemovePropertyPopup RemovePropertyIsOpen={RemovePropertyIsOpen} closeRemovePropertyModal={closeRemovePropertyModal} />
      <DeactivatePropertyPopup DeactivatePropertyIsOpen={DeactivatePropertyIsOpen} closeDeactivatePropertyodal={closeDeactivatePropertyodal} />
      </div>
    </div>
  );
}

export default PropertyListingSection;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Team1 from "../../../../public/assets/images/team1.jpg"
import Team2 from "../../../../public/assets/images/team2.jpg"
import Team3 from "../../../../public/assets/images/team3.jpg"
import Team4 from "../../../../public/assets/images/team4.jpg"
import FilterBy from "@/components/Design/FilterBy/filterBy";
import styles from "./directoryMainListing.module.scss";

function DirectoryMainListing() {
  return (
    <div className={styles.directoryMainListing}>
      <div className="container">
            <FilterBy />
            <div className="creativeTeam">
                <div className="creativeTeamInfo">
                    <div className="slide">
                        <div className="slideImg">
                        <Image
                            src={Team1}
                            alt="team"
                            width={285}
                            height={285}
                        />
                        </div>
                        <div className="slideInfo">
                        <div className="subDetail">
                            <h3>Evie McDaniel</h3>     
                                <div>
                                    <span>Photographer</span>
                                    <span>
                                    <Image
                                        src="/assets/images/location.svg"
                                        width={12}
                                        height={16}
                                        alt=""
                                    />
                                    London
                                    </span>
                                </div>
                                <Link href="">View Details</Link>               
                        </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team2}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>John James</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team3}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>Laura Aaliyah</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team4}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>Zach Hunter</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                        <Image
                            src={Team1}
                            alt="team"
                            width={285}
                            height={285}
                        />
                        </div>
                        <div className="slideInfo">
                        <div className="subDetail">
                            <h3>Evie McDaniel</h3>     
                                <div>
                                    <span>Photographer</span>
                                    <span>
                                    <Image
                                        src="/assets/images/location.svg"
                                        width={12}
                                        height={16}
                                        alt=""
                                    />
                                    London
                                    </span>
                                </div>
                                <Link href="">View Details</Link>               
                        </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team2}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>John James</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team3}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>Laura Aaliyah</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team4}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>Zach Hunter</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                        <Image
                            src={Team1}
                            alt="team"
                            width={285}
                            height={285}
                        />
                        </div>
                        <div className="slideInfo">
                        <div className="subDetail">
                            <h3>Evie McDaniel</h3>     
                                <div>
                                    <span>Photographer</span>
                                    <span>
                                    <Image
                                        src="/assets/images/location.svg"
                                        width={12}
                                        height={16}
                                        alt=""
                                    />
                                    London
                                    </span>
                                </div>
                                <Link href="">View Details</Link>               
                        </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team2}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>John James</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team3}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>Laura Aaliyah</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team4}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>Zach Hunter</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                        <Image
                            src={Team1}
                            alt="team"
                            width={285}
                            height={285}
                        />
                        </div>
                        <div className="slideInfo">
                        <div className="subDetail">
                            <h3>Evie McDaniel</h3>     
                                <div>
                                    <span>Photographer</span>
                                    <span>
                                    <Image
                                        src="/assets/images/location.svg"
                                        width={12}
                                        height={16}
                                        alt=""
                                    />
                                    London
                                    </span>
                                </div>
                                <Link href="">View Details</Link>               
                        </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team2}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>John James</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team3}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>Laura Aaliyah</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideImg">
                            <Image
                                src={Team4}
                                alt="team"
                                width={285}
                                height={285}
                            />
                        </div>
                        <div className="slideInfo">
                            <div className="subDetail">
                                    <h3>Zach Hunter</h3>     
                                    <div>
                                        <span>Photographer</span>
                                        <span>
                                        <Image
                                            src="/assets/images/location.svg"
                                            width={12}
                                            height={16}
                                            alt=""
                                        />
                                        London
                                        </span>
                                    </div> 
                                    <Link href="">View Details</Link>              
                            </div>
                        </div>
                    </div>
                </div>
                <button aria-label="loadmore" type="button" className="allBtn dark border">Load More</button>
            </div>
      </div>
    </div>
  );
}

export default DirectoryMainListing;

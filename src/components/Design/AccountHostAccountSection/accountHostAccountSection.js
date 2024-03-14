"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Select from 'react-select';
import PreviousIcon from "../../../../public/assets/images/down-arrow.svg";
import DownArrow from "../../../../public/assets/images/down-arrow.svg";
import DownloadStatement from "../../../../public/assets/images/statement.svg";
import styles from "./accountHostAccountSection.module.scss";

function AccountHostAccountSection() {
    const [open, setOpen] = useState(false);    
    const optionstitle = [
        { value: '50', label: '50' },
        { value: '100', label: '100' },
        { value: '150', label: '150' },
        { value: '200', label: '200' },
      ];
  return (
    <div className={styles.accountHostAccountSection}>
      <div className="container">
        <div className="balanceDiv">
            <h5>Your Current Balance</h5>
            <h2>£2,132.00</h2>
            <Link href="" className="allBtn dark border">Withdraw balance</Link>
        </div>       
        <div className="transactionLog">
            <h3>Transaction Log</h3>
            <div className="logDetails">
                <form>
                    <div>
                            <label>Search</label>
                            <input
                            type="text"
                            placeholder="Customer Name, Order ID"
                            name="search"
                            />
                    </div>
                    <button type="submit" aria-label="search">
                            <Image
                            src="/assets/images/search.svg"
                            width={24}
                            height={24}
                            alt=""
                            />
                    </button>
                </form>
                <button type="button" className="allBtn dark border" aria-label="search">
                <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} viewBox="0 0 27 27">
                    <g id="Group_5148" data-name="Group 5148" transform="translate(-1644.915 -842.915)">
                    <g id="Group_4547" data-name="Group 4547" transform="translate(1645 843)">
                        <g id="Ellipse_10" data-name="Ellipse 10" transform="translate(26.915 -0.084) rotate(90)" fill="none" stroke="#fff" strokeWidth="0.5">
                        <circle cx="13.5" cy="13.5" r="13.5" stroke="none" />
                        <circle cx="13.5" cy="13.5" r="13.25" fill="none" />
                        </g>
                    </g>
                    <g id="Group_4551" data-name="Group 4551" transform="translate(1652.317 851.13)">
                        <path id="Path_4027" data-name="Path 4027" d="M3.317,0,0,3.317,3.317,6.634" transform="translate(2.945 7.772) rotate(-90)" fill="none" stroke="#fff" strokeWidth="0.5" />
                        <path id="Path_4028" data-name="Path 4028" d="M0,0V7.772" transform="translate(6.261 7.772) rotate(180)" fill="none" stroke="#fff" strokeWidth="0.5" />
                        <path id="Path_4029" data-name="Path 4029" d="M7771.385,322.059v2.593h12.524v-2.593" transform="translate(-7771.385 -314.287)" fill="none" stroke="#fff" strokeWidth="0.5" />
                    </g>
                    </g>
                </svg>
                Export Transactions</button>
                <div className="drop_down">
                    <div className="wrapper_dropdown">
                    <Select
                        classNamePrefix="react-select"
                        placeholder="Show: 50"
                        options={optionstitle}
                        className={styles.selectCheckout}
                        />
                    </div>
                </div>
                <ul className="pagination">
                    <li className="prevIcon">
                        <Link href=""><Image src={PreviousIcon} height={12} width={12} alt="prev"/></Link>
                    </li>
                    <li>
                        <Link href="" className="activePage">1</Link>
                    </li>
                    <li>
                        <Link href="">2</Link>
                    </li>
                    <li>
                        <Link href="">3</Link>
                    </li>
                    <li>
                        <Link href="">4</Link>
                    </li>
                    <li className="nextIcon">
                        <Link href="" ><Image src={PreviousIcon} height={12} width={12} alt="next"/></Link>
                    </li>
                </ul>
            </div> 
            <div className="allTransactionDetails">
                <div className="titleHeadDiv">
                    <ul>
                        <li>Date</li>
                        <li>ID</li>
                        <li>Property Name</li>
                        <li>Customer</li>
                        <li>Type</li>
                        <li>Total Revenue</li>
                        <li>SHS Fees</li>
                        <li>My Revenue</li>
                        <li>Statement</li>
                    </ul>
                </div>
                <div className="tableBody">
                    <div className={open ? 'tableRow showMobile' : 'tableRow '}>
                        <ul>
                            <li>17/08/23</li>
                            <li>903</li>
                            <li data-th="Property Name">Bright and Light townhouse - N1</li>
                            <li data-th="Customer">Mark Smith</li>
                            <li data-th="Type">Credit - Booking</li>
                            <li data-th="Total Revenue">£109.60</li>
                            <li data-th="SHS Fees">£27.60</li>
                            <li data-th="My Revenue">£82.00</li>
                            <li data-th="Statement"><Link href=""><Image src={DownloadStatement} alt="download-statment" height={26} width={26} /></Link></li>
                            <li className="mobileShow"><button aria-label="arrow" type="button" className={open == 1 ? " " : " showMobile"} onClick={() => setOpen((open == 1) ? 0 : 1)}><Image src={DownArrow} alt="down-arrow" height={10} width={18}/></button></li>
                        </ul>
                    </div>
                </div>
                <div className="tableBody">
                    <div className="tableRow">
                        <ul>
                            <li>17/08/23</li>
                            <li>903</li>
                            <li data-th="Property Name">The Railway - NW1</li>
                            <li data-th="Customer">Graham Jones</li>
                            <li data-th="Type">Credit - Booking</li>
                            <li data-th="Total Revenue">£109.60</li>
                            <li data-th="SHS Fees">£27.60</li>
                            <li data-th="My Revenue">£82.00</li>
                            <li data-th="Statement"><Link href=""><Image src={DownloadStatement} alt="download-statment" height={26} width={26} /></Link></li>
                            <li className="mobileShow"><button aria-label="search" type="button" className={open == 2 ? " " : " showMobile"} onClick={() => setOpen((open == 2) ? 0 : 2)}><Image src={DownArrow} alt="down-arrow" height={10} width={18}/></button></li>
                        </ul>
                    </div>
                </div>
                <div className="tableBody">
                    <div className="tableRow">
                        <ul>
                            <li>17/08/23</li>
                            <li>903</li>
                            <li data-th="Property Name">The Railway - NW1</li>
                            <li data-th="Customer">Graham Jones</li>
                            <li data-th="Type">Credit - Booking</li>
                            <li data-th="Total Revenue">£109.60</li>
                            <li data-th="SHS Fees">£27.60</li>
                            <li data-th="My Revenue">£82.00</li>
                            <li data-th="Statement"><Link href=""><Image src={DownloadStatement} alt="download-statment" height={26} width={26} /></Link></li>
                            <li className="mobileShow"><button aria-label="search" type="button" className={open == 3 ? " " : " showMobile"} onClick={() => setOpen((open == 3) ? 0 : 3)}><Image src={DownArrow} alt="down-arrow" height={10} width={18}/></button></li>
                        </ul>
                    </div>
                </div>
                <div className="tableBody">
                    <div className="tableRow">
                        <ul>
                            <li>17/08/23</li>
                            <li>903</li>
                            <li data-th="Property Name">Bright and Light townhouse - N1</li>
                            <li data-th="Customer">Mark Smith</li>
                            <li data-th="Type">Credit - Booking</li>
                            <li data-th="Total Revenue">£109.60</li>
                            <li data-th="SHS Fees">£27.60</li>
                            <li data-th="My Revenue">£82.00</li>
                            <li data-th="Statement"><Link href=""><Image src={DownloadStatement} alt="download-statment" height={26} width={26} /></Link></li>
                            <li className="mobileShow"><button aria-label="search" type="button" className={open == 4 ? " " : " showMobile"} onClick={() => setOpen((open == 4) ? 0 : 4)}><Image src={DownArrow} alt="down-arrow" height={10} width={18}/></button></li>
                        </ul>
                    </div>
                </div>
                <div className="tableBody">
                    <div className="tableRow">
                        <ul>
                            <li>17/08/23</li>
                            <li>903</li>
                            <li data-th="Property Name">Bright and Light townhouse - N1</li>
                            <li data-th="Customer">Mark Smith</li>
                            <li data-th="Type" className="declined">Debit- Declined</li>
                            <li data-th="Total Revenue" className="declined">-£1041.20</li>
                            <li data-th="SHS Fees" className="declined">-£262.20</li>
                            <li data-th="My Revenue" className="declined">-£779.00</li>
                            <li data-th="Statement"><Link href=""><Image src={DownloadStatement} alt="download-statment" height={26} width={26} /></Link></li>
                            <li className="mobileShow"><button aria-label="search" type="button" className={open == 5 ? " " : " showMobile"} onClick={() => setOpen((open == 5) ? 0 : 5)}><Image src={DownArrow} alt="down-arrow" height={10} width={18}/></button></li>
                        </ul>
                    </div>
                </div>
                <div className="tableBody">
                    <div className="tableRow">
                        <ul>
                            <li>17/08/23</li>
                            <li>903</li>
                            <li data-th="Property Name">Bright and Light townhouse - N1</li>
                            <li data-th="Customer">Mark Smith</li>
                            <li data-th="Type">Credit - Booking</li>
                            <li data-th="Total Revenue">£109.60</li>
                            <li data-th="SHS Fees">£27.60</li>
                            <li data-th="My Revenue">£82.00</li>
                            <li data-th="Statement"><Link href=""><Image src={DownloadStatement} alt="download-statment" height={26} width={26} /></Link></li>
                            <li className="mobileShow"><button aria-label="search" type="button" className={open == 6 ? " " : " showMobile"} onClick={() => setOpen((open == 6) ? 0 : 6)}><Image src={DownArrow} alt="down-arrow" height={10} width={18}/></button></li>
                        </ul>
                    </div>
                </div>
            </div>           
        </div> 
      </div>
    </div>
  );
}

export default AccountHostAccountSection;

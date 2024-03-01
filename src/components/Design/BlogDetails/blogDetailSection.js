"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BackArrow from "../../../../public/assets/images/back-arrow.svg"
import BlogDetails from "../../../../public/assets/images/blog-details.jpg";
import { InlineShareButtons } from "sharethis-reactjs";
import styles from "./blogDetailsSection.module.scss";

function BlogDetailSection() {
    
  return (
    <div className={styles.blogDetailSection}>
      <div className="container">
        <div className="blogDetailsTop">
            <div className="shareSidebar">
                <Link className="backbtn" href="/blog-listing/"> 
                    <Image src={BackArrow} alt="backarrow" height={14} width={9}></Image> 
                    Back To Journal Enteries 
                </Link>
                <div className="share-this">
                    <span>Share This Journal Entry:</span>
                    <InlineShareButtons
                        config={{
                            alignment: "center",
                            color: "social",
                            enabled: true,
                            font_size: 13,
                            language: "en",
                            networks: ["pinterest","twitter", "sharethis"],
                            padding: 8,
                            radius: 0,
                            show_total: false,
                            size: 40,
                            //url: process.env.SITE_URL+pathname, 
                            image: "",
                        }}
                    />
                </div>
            </div>
            <div className="contentBlock">
                <h3>Subheading Goes Here</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Image src={BlogDetails} height={500} width={500} alt="blog-details"/>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailSection;

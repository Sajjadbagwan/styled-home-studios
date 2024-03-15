"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import News1 from "../../../../public/assets/images/blog1.jpg"
import News2 from "../../../../public/assets/images/blog2.jpg"
import News3 from "../../../../public/assets/images/blog3.jpg"
import styles from "./faqTopArticle.module.scss";

function FaqTopArticle() {

  return (
    <div className={styles.faqTopArticleSection + " faqTopArticleSection"}>
        <div className="container">
            <div className="title titleDouble">
                <div>
                    <h2>Top Articles</h2>
                </div>
                <Link href="/blog-listing/">View All Journal Entries</Link>
            </div>
            <div className="allLocation">
                <Link href="/blog-details/" className="slide">
                    <div className="slideImg">
                        <Image
                        src={News1}
                        alt="news1"
                        width={474}
                        height={325}
                        />
                    </div>
                    <div className="slideInfo">
                        <div className="titleDouble line">
                        <span className="category">Guest Expert</span>
                        <h3>Why Apply to Host</h3>
                        </div>
                    </div>
                </Link>
                <Link href="/blog-details/" className="slide">
                    <div className="slideImg">
                        <Image
                        src={News2}
                        alt="news2"
                        width={474}
                        height={325}
                        />
                    </div>
                    <div className="slideInfo">
                        <div className="titleDouble line">
                        <span className="category">Tips</span>
                        <h3>How to know if your home is suitable</h3>
                        </div>
                    </div>
                </Link>
                <Link href="/blog-details/" className="slide">
                    <div className="slideImg">
                        <Image
                        src={News3}
                        alt="news3"
                        width={474}
                        height={325}
                        />
                    </div>
                    <div className="slideInfo">
                        <div className="titleDouble line">
                        <span className="category">Inspiration</span>
                        <h3>How to get more booking on Styled Home Studios</h3>
                        </div>
                    </div>
                </Link>
            </div>   
        </div>            
    </div>
  );
}

export default FaqTopArticle;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";
import BlogListing1 from "../../../../public/assets/images/blog1.jpg";
import BlogListing2 from "../../../../public/assets/images/blog2.jpg";
import BlogListing3 from "../../../../public/assets/images/blog3.jpg";
import styles from "./blogListingSection.module.scss";

function BlogListingSection() {
    
  return (
    <div className={styles.blogListingSection}>
      <div className="container">
      <EqualHeight>
        <div className="allLocation sliderDots">
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing1} alt="listing" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Tips</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing2} alt="listing2" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Inspiration</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing3} alt="listing3" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Guest Expert</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing1} alt="listing" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Tips</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing2} alt="listing2" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Inspiration</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing3} alt="listing3" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Guest Expert</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing1} alt="listing" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Tips</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing2} alt="listing2" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Inspiration</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing3} alt="listing3" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Guest Expert</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing1} alt="listing" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Tips</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing2} alt="listing2" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Inspiration</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="slideImg">
                <Image src={BlogListing3} alt="listing3" height={325} width={474}/>
              </div>
              <div className="slideInfo">
                <div className="subDetail">
                    <div className="categoryTitle">
                        <div className="blogCateogry">Guest Expert</div>
                        <EqualHeightElement name="title">
                            <h3>Title of news article goes here on one or two lines of text if needed</h3>   
                        </EqualHeightElement> 
                    </div>                      
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>  
                  <Link href="/blog-details/">Read More</Link>        
                </div>
              </div>
            </div>
        </div>
      </EqualHeight>
      </div>
    </div>
  );
}

export default BlogListingSection;

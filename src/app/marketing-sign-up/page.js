"use client";
import React, { useState } from "react";
import Link from 'next/link'
import styles from "./marketingSignUp.module.scss";
import MakrtingSignUpSection from "@/components/Design/MarketingSignUp/marketingSignUpSection";

const SignUpMarketing = () => {
  return (
    <div className={styles.marketingSignUpPage}>   
      <MakrtingSignUpSection />
    </div>      
        
  );
};

export default SignUpMarketing;
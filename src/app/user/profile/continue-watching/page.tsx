'use client'
import { useState, useEffect } from 'react';
import Navbar from "@/app-components/content/navbar/navbar";
import Style from "./style.module.css";
export default function continueWatching() {
    return (
        <div className={Style.profileContinueWatchingBGBox}>
            <Navbar />
            <div className={Style.profileContinueWatchingContent}>
                <div className={Style.profileContinueWatchingContentBox}>
                    
                </div>
            </div>
        </div>
    )
}
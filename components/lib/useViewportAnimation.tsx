'use client';
import React, { useState, useEffect } from 'react'

const withViewportAnimation = (ref: React.MutableRefObject<HTMLElement | null>, animation: string, delay: number = 20) => {
    const element = ref.current;
    var isAnimated = false;

    if (element) {
        element.classList.add("toBeAnimated");

        if (element.classList.contains("animated")) {
            return true;
        }
    }

    const handleScroll = () => {
        if (element && element?.getBoundingClientRect().top! <= window.innerHeight * 0.95) {
            setTimeout(() => {
                element.classList.add(animation);
                element.classList.add("animated");
                element.classList.remove("toBeAnimated");
                isAnimated = true;
            }, delay);
        }

        if (isAnimated || element?.classList.contains("animated")) {
            window.removeEventListener("scroll", handleScroll);
        }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return isAnimated;
}

export default withViewportAnimation;

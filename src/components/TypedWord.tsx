"use client"

import { useEffect, useRef } from 'react';

import Typed from 'typed.js'

export default function TypedWord(){

    const typedRef = useRef<typeof Typed>();

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Fronend Developer", "UI/UX Designer"],
            typeSpeed: 80,
            backSpeed: 60,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <>
            <span ref={typedRef}></span>
        </>
    )
}
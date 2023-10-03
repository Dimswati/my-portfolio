"use client"

import { useEffect, useRef } from 'react';

import Typed from 'typed.js'

export default function TypedWord(){

    const typedRef = useRef<typeof Typed>();

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Developer", "Designer"],
            typeSpeed: 80,
            backSpeed: 60,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    return (
        <>
            I`m a <span ref={typedRef}></span>
        </>
    )
}
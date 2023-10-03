"use client"

import React from 'react'
import useMenu from '@/lib/useMenu'
import { HiMenu } from 'react-icons/hi'

type Props = {}

const NavBar = (props: Props) => {

    const { isOpen, onClose, onOpen } = useMenu()

    const menuFunc = () => {
        if(isOpen === true){
            onClose()
        } else {
            onOpen()
        }
    }

    return (
        <div className="w-full bg-fuchsia-100 h-14 lg:hidden block border-b border-fuchsia-200 fixed top-0 z-50">
            <nav className="container w-full flex justify-between px-4 items-center h-full">
                <a href="#">
                    <img
                        src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/logo.svg"
                        alt="paul logo"
                    />
                </a>
                <button className="bg-fuchsia-200 rounded-lg p-[4px] text-2xl" onClick={menuFunc}>
                    <HiMenu />
                </button>
            </nav>
        </div>
    )
}

export default NavBar
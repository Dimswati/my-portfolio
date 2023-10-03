"use client"

import Link from "next/link"

import { BsHouseDoor, BsPerson, BsBriefcase, BsColumns, BsTelephone } from 'react-icons/bs'
import useMenu from "@/lib/useMenu"

import Image from "next/image"

import { twMerge } from 'tailwind-merge'

const Menu = () => {

  const { isOpen, onClose } = useMenu()

  return (
    <aside className={twMerge('w-[100px] block fixed inset-y-0 bg-fuchsia-100 lg:hidden transition-all ease duration-200 z-50', !isOpen ? '-translate-x-[100px]' : 'translate-x-0')}>
      <div className='w-full inline-flex py-2 px-2 justify-center content-center border-b border-fuchsia-300'>
        <a href="" className="w-[90%] relative" > 
          <Image src="https://shtheme.com/demosd/tapsiwp/wp-content/themes/tapsi/assets/img/logo.svg" alt="paul logo" fill/>
        </a>
      </div>
      <div className='flex flex-col justify-center items-center gap-8 antialiased mt-6 text-sm font-medium transition duration-300'>
        <Link href='/#home' className='flex flex-col items-center gap-2' onClick={onClose}>
          <BsHouseDoor size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
          <p>Home</p>
        </Link>
        <Link href='/#about' className='flex flex-col items-center gap-2' onClick={onClose}>
          <BsPerson size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
          <p>About</p>
        </Link>
        <Link href='/#services' className='flex flex-col items-center gap-2' onClick={onClose}>
          <BsBriefcase size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
          <p>Services</p>
        </Link>
        <Link href='/#portfolio' className='flex flex-col items-center gap-2' onClick={onClose}>
          <BsColumns size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
          <p>Portfolio</p>
        </Link>
        <Link href='/#contact' className='flex flex-col items-center gap-2' onClick={onClose}>
          <BsTelephone size={18} className='hover:bg-fuchsia-200 box-content px-6 py-2 rounded-full' />
          <p>Contact</p>
        </Link>
      </div>
    </aside>
  )
}

export default Menu
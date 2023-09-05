'use client';

import Image from "next/image"
import logoPic from '@/public/assets/icons/logo.png'
import dropdownPic from '@/public/assets/icons/dropdown.png'
import forwardInPic from '@/public/assets/icons/forwardin.png'
import Link from "next/link"
import { useState, useEffect } from 'react'
import { useTransition, animated } from "@react-spring/web";
import Button from "./landing/Button";

const Navbar = () => {
    const [isDropdown, setIsDropdown] = useState(false)
    const transformTransition = useTransition(isDropdown, {
        from: { transform: "translateY(-50px)" },
        enter: { transform: "translateY(0px)" },
        leave: { transform: "translateY(-50px)" },
    })
    const handleDropdownClick = (e: React.MouseEvent) => {
        if (!document.getElementById('mobile_nav_dropdown')?.contains(e.target as Node)) {
            setIsDropdown(false)
        }
    }


    return (
        <nav className="absolute top-0 z-10 w-full py-6 bg-transparent">
            <div className="flex justify-between items-center px-8 relative xl:px-0 xl:w-[85%] mx-auto">
                <div className="flex gap-4 items-center">
                    <div>
                        <Image
                            src={logoPic}
                            alt="logo"
                        />
                    </div>
                    <div className="hidden md:block">
                        <Image
                            src={forwardInPic}
                            alt="forwardin"
                        />
                    </div>
                </div>
                <div className="hidden lg:flex xl:gap-10 gap-6 font-bold">

                    <Link href={'/'}>
                        Get Started
                    </Link>
                    <Link href={'/'}>
                        Features
                    </Link>
                    <Link href={'/'}>
                        Integrations
                    </Link>
                    <Link href={'/'}>
                        Pricing
                    </Link>
                    <Link href={'/'}>
                        FAQ
                    </Link>
                    <Link href={'/'}>
                        Demo
                    </Link>


                </div>
                <div>
                    <div className="block lg:hidden" onClick={() => setIsDropdown(!isDropdown)}>
                        <Image
                            src={dropdownPic}
                            alt="dropdown"
                        />
                    </div>
                    <div className="hidden lg:flex justify-end gap-4">
                        <Button text='Sign Up' href='/signup' isPrimary={false} />
                        <Button text='Sign In' href='/signin' isPrimary={true} />
                    </div>
                </div>
            </div>
            {transformTransition((style, item) => item && <animated.div style={style} className="absolute mt-4 lg:hidden w-full h-[100vh]" onClick={(e) => handleDropdownClick(e)}>
                <div id="mobile_nav_dropdown" className="bg-white-50 rounded-lg w-[90%] max-w-md  shadow-xl py-4 flex flex-col gap-8 mx-auto font-semibold text-center">
                    <Link href={'/'}>
                        Get Started
                    </Link>
                    <Link href={'/'}>
                        Features
                    </Link>
                    <Link href={'/'}>
                        Integrations
                    </Link>
                    <Link href={'/'}>
                        Pricing
                    </Link>
                    <Link href={'/'}>
                        FAQ
                    </Link>
                    <Link href={'/'}>
                        Demo
                    </Link>
                </div>
            </animated.div>)}
        </nav>
    )
}

export default Navbar 
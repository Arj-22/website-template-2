"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const MainNav = () => {

    const pathname = usePathname(); 
    // const params = useParams();http://localhost:3000/contact
    const routes = [
        {
            href: `/`,
            label: "Home",
            active: pathname === `/`
        },
        {
            href: `/contact`,
            label: "Contact",
            active: pathname === `/contact`
        },
        {
            href: `/about`,
            label: "About Us",
            active: pathname === `/about`
        }
    ]
  return (
    <>
    <nav className=''>
        <div className='text-md'>
            {routes.map((route) => (
                <Link key={route.href} href={route.href} className={!route.active ? 'px-5 py-2 text-stone-400 hover:text-blue-600' : "px-5 py-2 text-black"}>
                    {route.label}
                </Link>
            ))}
        </div>
    </nav>
    </>
  )
}

export default MainNav
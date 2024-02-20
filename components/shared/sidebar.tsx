"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { navLinks } from '@/constants'

const SideBar = () => {
  const pathname = usePathname()
  return (
    <aside className="sidebar">
    <div className="flex size-full flex-col gap-4">
      {/* Logo */}
      <Link href="/" className="sidebar-logo">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={180}
          height={100}
        />
      </Link>

      {/* Nav Items */}
      <nav className="sidebar-nav">
        <SignedIn>
          <ul className="sidebar-nav_elements">
            {/* Render up to Object recolor */}
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive
                      ? "bg-gradient-to-bl from-gray-700 via-gray-800 to-gray-800 text-white "
                      : "text-dark-700"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && "bg-gradient-to-bl from-gray-600 via-gray-500 to-gray-700"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="sidebar-nav_elements">
            {/* Render from profile to credits navLinks */}
            {navLinks.slice(6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "text-dark-700"
                  }`}
                >
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && "brightness-200"}`}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li className="flex-center cursor-pointer gap-2 p-4">
              <UserButton afterSignOutUrl="/" showName />
            </li>
          </ul>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Se connecter</Link>
          </Button>
        </SignedOut>
      </nav>
    </div>
  </aside>
  )
}

export default SideBar
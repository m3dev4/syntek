"use client"

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
    {/* LOGO */}
    <Link href="/" className="flex items-center gap-2 md:py-2">
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={180}
        height={28}
      />
    </Link>

    {/* MENU ICON AS SHEET TRIGGER */}
    <nav className="flex gap-2">
      <SignedIn>
        <UserButton afterSignOutUrl="/" />

        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                width={152}
                height={23}
              />

              <ul className="header-nav_elements flex">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "bg-gradient-to-bl from-gray-600 via-gray-500 to-gray-700"
                      } p-18-semibold flex whitespace-nowrap text-dark-700 flex`}
                    >
                      <Link href={link.route}>
                        {link.label}
                        </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          </SheetContent>
        </Sheet>
      </SignedIn>

      <SignedOut>
        <Button asChild className="button bg-purple-gradient bg-cover">
          <Link href="/sign-in">Se connecter</Link>
        </Button>
      </SignedOut>
    </nav>
  </header>
  );
};

export default MobileNav;

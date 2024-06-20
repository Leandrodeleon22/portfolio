"use client";
import React from "react";

import Image from "next/image";
import Logo from "@/assets/DESKTOP/desktop-logo-01-1.png";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useStore } from "@/lib/store";

export const links = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const { showMobileNav, hideMobileNavFunc } = useStore();
  const showNavBar = () => {
    hideMobileNavFunc(true);
  };

  return (
    <div className="fixed z-50 flex justify-between items-center py-1  bg-[var(--background-color)] w-full">
      <div className="w-3/4 mx-auto flex justify-between items-center max-[1085px]:w-5/6">
        <Link href="/">
          <Image src={Logo} width={190} height={82} alt="Logo" />
        </Link>
        <div onClick={showNavBar}>
          <Hamburger />
        </div>
        <ul className=" w-5/12 text-[1.9rem] flex justify-between uppercase items-center max-[943px]:hidden">
          {links.map((link) => {
            return (
              <Link
                className="hover:text-[var(--neon-green-color)]"
                key={link.id}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

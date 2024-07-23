"use client";
import React, { useState } from "react";

import Image from "next/image";
import Logo from "@/assets/desktop/desktop-logo-01-1.png";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useStore } from "@/lib/store";
import { motion, useScroll } from "framer-motion";

export const links = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Contact", href: "#contact" },
];

const NavBar = () => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);

  const { showMobileNav, hideMobileNavFunc } = useStore();

  const [activeLink, setActiveLink] = useState("#home");
  const showNavBar = () => {
    hideMobileNavFunc(true);
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <div className="fixed z-50 flex justify-between items-center py-1  bg-[var(--background-color)] w-full">
      <div className="w-3/4 mx-auto flex justify-between items-center max-[1085px]:w-5/6">
        <Link href="/#home">
          <Image
            src={Logo}
            width={190}
            height={82}
            alt="Logo"
            onClick={() => setActiveLink("#home")}
          />
        </Link>
        <div onClick={showNavBar}>
          <Hamburger />
        </div>
        <ul className=" w-5/12 text-[1.9rem] flex justify-between uppercase items-center max-[943px]:hidden">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  className={`hover:text-[var(--neon-green-color)] `}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.name}
                  {link.href === activeLink && (
                    <motion.div
                      layoutId="bottom-border"
                      className="bg-[var(--neon-green-color)] w-full h-[2px] m-0 p-0 "
                    ></motion.div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

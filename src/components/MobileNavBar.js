"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { links } from "./NavBar";
import { useStore } from "@/lib/store";

const MobileNavBar = () => {
  const { showMobileNav, hideMobileNavFunc } = useStore();
  const handleClick = () => {
    hideMobileNavFunc(false);
  };

  return (
    <div
      className={`z-[1000] bg-slate-100 fixed h-full w-full scale-y-0  max-[943px]:flex justify-center items-center transition duration-500 ${
        showMobileNav === null
          ? ""
          : showMobileNav
          ? "background-scale"
          : "hideBackground-scale"
      }`}
    >
      <div className="w-5/6 flex items-center flex-col ">
        <div className=" absolute top-20 right-20" onClick={handleClick}>
          <IoMdClose className="text-black text-[3rem]" />
        </div>
        <ul className="flex flex-col text-[2.5rem]">
          {links.map((link) => {
            return (
              <Link
                className="text-black mb-5 hover:text-[var(--neon-green-color)]"
                key={link.id}
                href={link.href}
                onClick={handleClick}
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

export default MobileNavBar;

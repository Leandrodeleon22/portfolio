import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Logo from "@/assets/DESKTOP/desktop-logo-01 1.png";
import Link from "next/link";

const links = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "Contact", href: "#contact" },
];

const NavBar = () => {
  return (
    <Wrapper>
      <nav className=" flex justify-between items-center mt-[1rem]">
        <Image src={Logo} width={190} height={82} alt="Logo" />
        <ul className=" w-5/12 text-[1.9rem] flex justify-between uppercase">
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
      </nav>
    </Wrapper>
  );
};

export default NavBar;

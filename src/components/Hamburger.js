import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "./NavBar";
const Hamburger = () => {
  return (
    <GiHamburgerMenu className=" text-[2.75rem] hidden max-[943px]:inline-block cursor-pointer z-[1500]" />
  );
};

export default Hamburger;

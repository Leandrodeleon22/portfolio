import Image from "next/image";
import React from "react";
import linkedInImg from "@/assets/desktop/desktop-linkedin.png";
import githubImg from "@/assets/desktop/desktop-github.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#121212] flex justify-center h-[8rem]">
      <div className="flex items-center">
        <p className="text-[1.7rem] mr-6">@2024 Leandro De Leon</p>
        <Link
          href="https://www.linkedin.com/in/leandrodeleon4444/"
          target="_blank"
        >
          <Image
            src={linkedInImg}
            width={30}
            height={30}
            alt="linkedin"
            className="mr-4"
          />
        </Link>
        <Link href="https://github.com/Leandrodeleon22" target="_blank">
          <Image src={githubImg} width={30} height={30} alt="github" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

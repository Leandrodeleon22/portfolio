import React from "react";
import Wrapper from "./Wrapper";
import javascriptImg from "@/assets/DESKTOP/desktop-js.png";
import nextImg from "@/assets/DESKTOP/desktop-nextjs.png";
import reactImg from "@/assets/DESKTOP/desktop-react.png";
import nodeImg from "@/assets/DESKTOP/desktop-nodejs.png";
import expressImg from "@/assets/DESKTOP/desktop-expressjs.png";
import tailwindImg from "@/assets/DESKTOP/desktop-tailwindcss.png";
import mongoDbImg from "@/assets/DESKTOP/desktop-mongodb-1.png";
import postgresImg from "@/assets/DESKTOP/desktop-postgresql.png";
import prismaImg from "@/assets/DESKTOP/desktop-prisma.png";
import figmaImg from "@/assets/DESKTOP/desktop-figma.png";
import illustratorImg from "@/assets/DESKTOP/desktop-ai.png";
import photoshopImg from "@/assets/DESKTOP/desktop-photoshop.png";
import Image from "next/image";

const icons = [
  { id: 1, name: "Javascript", icon: javascriptImg },
  { id: 2, name: "NextJS", icon: nextImg },
  { id: 3, name: "React", icon: reactImg },
  { id: 4, name: "NodeJS", icon: nodeImg },
  { id: 5, name: "Express", icon: expressImg },
  { id: 6, name: "Tailwind-css", icon: tailwindImg },
  { id: 7, name: "Mongo DB", icon: mongoDbImg },
  { id: 8, name: "Postgresql", icon: postgresImg },
  { id: 9, name: "Prisma", icon: prismaImg },
  { id: 10, name: "Figma", icon: figmaImg },
  { id: 11, name: "Illustrator", icon: illustratorImg },
  { id: 12, name: "Photoshop", icon: photoshopImg },
];

const About = () => {
  return (
    <Wrapper>
      <section className="mt-[10rem] font-extralight pt-[7rem]" id="about">
        <h1 className="text-[4.2rem]  text-[var(--neon-green-color)] max-[630px]:text-center ">
          About Me
        </h1>
        <p className="text-[2.4rem] leading-[3.5rem] w-11/12 mt-[2.5rem] max-[630px]:text-center max-[500px]:text-[2rem] max-[500px]:leading-[3.5rem]">
          Hi! I’m a Web Developer with professional experience in graphic
          design. I enjoy combining my skills in problem solving and design to
          create different types of web apps. I also have experience in backend
          development, relational database and non-relational database.
        </p>
        <h2 className="font-extralight text-[2.3rem] italic my-[3rem] max-[630px]:text-center ">
          Core toolkit that I use:
        </h2>
        <div className=" grid grid-cols-6 gap-y-[4rem] mt-[6rem] justify-items-center mb-[10rem] max-[630px]:grid-cols-3 max-[630px]:gap-5">
          {icons.map((icon) => {
            return (
              <div
                key={icon.id}
                className="flex flex-col items-center text-[1.9rem] text-[var(--neon-green-color)]"
              >
                <Image
                  src={icon.icon}
                  width={67}
                  height={67}
                  alt={icon.name}
                  className="mb-4 h-[5rem] w-[5rem]"
                />

                <span className="max-[500px]:text-[1.3rem]">{icon.name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default About;

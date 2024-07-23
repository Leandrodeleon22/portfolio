"use client";
import React, { useRef } from "react";
import { inView, motion, useInView } from "framer-motion";
import Wrapper from "./Wrapper";
import javascriptImg from "@/assets/desktop/desktop-js.png";
import nextImg from "@/assets/desktop/desktop-nextjs.png";
import reactImg from "@/assets/desktop/desktop-react.png";
import nodeImg from "@/assets/desktop/desktop-nodejs.png";
import expressImg from "@/assets/desktop/desktop-expressjs.png";
import tailwindImg from "@/assets/desktop/desktop-tailwindcss.png";
import mongoDbImg from "@/assets/desktop/desktop-mongodb-1.png";
import postgresImg from "@/assets/desktop/desktop-postgresql.png";
import prismaImg from "@/assets/desktop/desktop-prisma.png";
import figmaImg from "@/assets/desktop/desktop-figma.png";
import illustratorImg from "@/assets/desktop/desktop-ai.png";
import photoshopImg from "@/assets/desktop/desktop-photoshop.png";
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
  const ref = useRef(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: inView ? 1 : 0, y: 0 },
  };

  return (
    <Wrapper>
      <motion.section
        className="mt-[10rem] font-extralight pt-[7rem]"
        id="about"
      >
        <motion.h1
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          // variants={containerVariants}
          className="text-[4.2rem]  text-[var(--neon-green-color)] max-[630px]:text-center "
        >
          About Me
        </motion.h1>
        <motion.p
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          className="text-[2.4rem] leading-[3.5rem] w-11/12 mt-[2.5rem] max-[630px]:text-center max-[500px]:text-[2rem] max-[500px]:leading-[3.5rem]"
        >
          Hi! I’m a Web Developer with professional experience in graphic
          design. I enjoy combining my skills in problem solving and design to
          create different types of web apps. I also have experience in backend
          development, relational database and non-relational database.
        </motion.p>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          className="font-extralight text-[2.3rem] italic my-[3rem] max-[630px]:text-center "
        >
          Core toolkit that I use:
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className=" grid grid-cols-6 gap-y-[4rem] mt-[6rem] justify-items-center mb-[10rem] max-[630px]:grid-cols-3 max-[630px]:gap-5"
        >
          {icons.map((icon) => {
            return (
              <motion.div
                key={icon.id}
                // ref={ref}
                className="flex flex-col items-center text-[1.9rem] text-[var(--neon-green-color)]"
                variants={itemVariants}
              >
                <Image
                  src={icon.icon}
                  width={67}
                  height={67}
                  alt={icon.name}
                  className="mb-4 h-[5rem] w-[5rem]"
                />

                <span className="max-[500px]:text-[1.3rem]">{icon.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>
    </Wrapper>
  );
};

export default About;

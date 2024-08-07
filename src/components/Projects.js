"use client";

import React, { useRef } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import countryFlag from "@/assets/desktop/desktop-country-mockup-1.png";
import calculatorTip from "@/assets/desktop/desktop-calculator-tip-mockup-1.png";
import multiStepForm from "@/assets/desktop/desktop-multi-step-form-mockup-1.png";
import rockPaperScissors from "@/assets/desktop/desktop-rock-paper-scissors-1.png";
import todo from "@/assets/desktop/desktop-todo-app-1.png";
import graphicDesigns from "@/assets/desktop/desktop-graphic-designs-1.png";
import Image from "next/image";
import { motion, useInView, inView } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Country Flag",
    image: countryFlag,
    description:
      "A simple app that allows you to search for the flag of each country.",
    link: "https://countries-azure-pi.vercel.app/",
    tools: ["NextJS", "Prisma-Posgres", "Tailwind", "Typescript"],
  },
  {
    id: 2,
    name: "Calculator Tip",
    image: calculatorTip,
    description: "Easily calculate the tip percentage of your choice",
    link: "https://classy-bublanina-73b83c.netlify.app/",
    tools: ["React", "CSS", "Redux Toolkit"],
  },
  {
    id: 3,
    name: "Multi Step Form",
    image: multiStepForm,
    description: "Simple Multi step form using global state management",
    link: "https://64a1f9846ca456187069024b--admirable-phoenix-d07887.netlify.app/",
    tools: ["React", "CSS", "Redux Toolkit"],
  },
  {
    id: 4,
    name: "Rock Paper Scissors Game",
    image: rockPaperScissors,
    description: "Classic game against computer and easy to play",
    link: "https://64dd7c6ba7258a2a6b853575--chic-pothos-e44530.netlify.app/",
    tools: ["React", "CSS", "React Query"],
  },
  {
    id: 5,
    name: "Todo App",
    image: todo,
    description: "Task management app. Finish one task at a time",
    link: "https://sprightly-gnome-6795c5.netlify.app/",
    tools: ["MongoDB", "Express", "React", "NodeJS"],
  },
  {
    id: 6,
    name: "Graphic Designs",
    image: graphicDesigns,
    description: "Check out some of my graphic design projects",
    link: "https://www.behance.net/leandrodeleon",
    tools: ["Photoshop", "Illustrator"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
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
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        id="projects"
        className="font-extralight pt-[7rem] mt-[100px]"
      >
        <motion.h1
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          className="text-[4.2rem]  text-[var(--neon-green-color)] max-[500px]:text-center"
        >
          Projects
        </motion.h1>
        <div className="grid grid-cols-3 justify-items-center item gap-9 my-[2.5rem] max-[830px]:grid-cols-1">
          {projects.map((project) => {
            return (
              <motion.div variants={itemVariants} key={project.id}>
                <Link
                  href={project.link}
                  className="flex flex-col py-[5rem] justify-between bg-gradient-to-t from-[var(--neon-green-border)] to-[var(--top-gradient)] to-60% items-center p-8 border-solid border-[var(--neon-green-color)] border-[.15rem] w-full rounded-2xl hover:drop-shadow-[0_10px_20px_rgba(6,66,12,1)] hover:scale-[1.02] transition hover:ease-in"
                  key={project.id}
                  target="_blank"
                >
                  <Image
                    src={project.image}
                    height={177}
                    width={281}
                    alt={project.name}
                  />
                  <h1 className="text-[2.5rem] font-normal my-3 text-center">
                    {project.name}
                  </h1>
                  <p className="font-normal text-[1.6rem] text-center ">
                    {project.description}
                  </p>
                  <button className="bg-[#1ED430] w-3/4 h-[5rem] rounded-2xl text-[2.5rem] font-normal my-8 hover:bg-[#26B634]">
                    View Live
                  </button>
                  <div className="flex w-full justify-around px-2 italic font-normal text-[1.4rem] flex-wrap">
                    {project.tools.map((tool) => {
                      return <span key={tool}>{tool}</span>;
                    })}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </Wrapper>
  );
};

export default Projects;

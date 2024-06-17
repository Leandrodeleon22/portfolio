import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import countryFlag from "@/assets/DESKTOP/desktop-country-mockup 1.png";
import calculatorTip from "@/assets/DESKTOP/desktop-calculator-tip-mockup 1.png";
import multiStepForm from "@/assets/DESKTOP/desktop-multi-step-form-mockup 1.png";
import rockPaperScissors from "@/assets/DESKTOP/desktop-rock-paper-scissors 1.png";
import todo from "@/assets/DESKTOP/desktop-todo-app 1.png";
import graphicDesigns from "@/assets/DESKTOP/desktop-graphic-designs 1.png";
import Image from "next/image";

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
  return (
    <Wrapper>
      <section id="projects" className="font-extralight pt-[7rem]">
        <h1 className="text-[4.2rem]  text-[var(--neon-green-color)]">
          Projects
        </h1>
        <div className="grid grid-cols-3 justify-items-center item gap-9 my-[2.5rem]">
          {projects.map((project) => {
            return (
              <Link
                href={project.link}
                className="flex flex-col justify-between bg-gradient-to-t from-[var(--neon-green-border)] to-[var(--top-gradient)] to-60% items-center p-8 border-solid border-[var(--neon-green-color)] border-[.15rem] w-full rounded-2xl hover:drop-shadow-[0_10px_20px_rgba(6,66,12,1)] hover:scale-[1.02] transition hover:ease-in"
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
                <div className="flex w-full justify-around px-2 italic font-normal text-[1.4rem]">
                  {project.tools.map((tool) => {
                    return <span key={tool}>{tool}</span>;
                  })}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Projects;

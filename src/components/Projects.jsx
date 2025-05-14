import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import LeftProjectImg from "../assets/left-project.png";
import RightProjectImg from "../assets/right-project.png";

const projects = [
  {
    title: "Random Jokes",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
    techs: ["react", "vercel", "axios", "router"],
    bgColor: "bg-[#DDEEFE]",
    img: LeftProjectImg,
    githubLink: "#",
    appLink: "#",
  },
  {
    title: "Are you bored?",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    techs: ["react", "redux", "axios", "router", "vercel"],
    bgColor: "bg-[#D9F6F1]",
    img: RightProjectImg,
    githubLink: "#",
    appLink: "#",
  },
];

function Projects() {
  const { theme } = useTheme();

  const projectDarkBgColors = {
    "Random Jokes": "bg-[#2D3235]",
    "Are you bored?": "bg-[#495351]",
  };

  return (
    <section
      className={`left-0 top-0 flex flex-col justify-center items-center py-16 ${
        theme === "dark" ? "bg-[#484148]" : ""
      }`}
    >
      <div className="p1 w-[69rem]">
        <p
          className={`font-[Inter] font-medium text-4xl leading-[3.625rem] tracking-[0.01em] flex justify-center pb-5 ${
            theme === "light" ? "text-[#0A0A14]" : "text-[#FFFFFF]"
          }`}
        >
          Projects
        </p>
      </div>
      {/*taşıyıcı*/}
      <div className="p2 w-[69rem] mt-5 flex flex-wrap gap-x-24 items-start">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative w-[500px] rounded-[12px] p-10 h-[41.75rem] ${
              theme === "light"
                ? project.bgColor
                : projectDarkBgColors[project.title] || project.bgColor
            }`}
          >
            <h2
              className={`font-[Playfair] font-bold text-[29px] leading-[3rem] ${
                theme === "light" ? "text-black" : "text-[#FFFFFF]"
              }`}
            >
              {project.title}
            </h2>
            <p
              className={`w-[23rem] mt-4 pb-4 ${
                theme === "light" ? "text-black" : "text-[#FFFFFF]"
              }`}
            >
              {project.info}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techs.map((tech, idx) => (
                <span
                  key={idx}
                  className={`font-[Playfair] font-bold text-[16px] leading-[100%] tracking-[0.05em] rounded-full px-4 py-2 h-[2rem] ${
                    theme === "light"
                      ? "text-black bg-white"
                      : "text-[#FFFFFF] bg-[#525252]"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div
              className={`flex justify-between mt-9 font-semibold text-[18px] leading-[150%] ${
                theme === "light" ? "text-black" : "text-[#FFFFFF]"
              }`}
            >
              <a href={project.githubLink} target="_blank">
                View on Github
              </a>
              <a href={project.appLink} target="_blank">
                Go to app →
              </a>
            </div>
            <img
              src={project.img}
              alt={project.title}
              className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2"
            />
          </div>
        ))}
      </div>
      {/*taşıyıcı*/}
    </section>
  );
}

export default Projects;

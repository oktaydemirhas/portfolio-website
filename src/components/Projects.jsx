import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import siteData from "../data/data.js";
import localLeftProjectImg from "../assets/left-project.png";
import localRightProjectImg from "../assets/right-project.png";

const projectImages = {
  "../assets/left-project.png": localLeftProjectImg,
  "../assets/right-project.png": localRightProjectImg,
};

function Projects() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const projectsData = siteData[language].projectsSection;
  const sectionTitle = projectsData.title;
  const projectItems = projectsData.projects;

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
          {sectionTitle}
        </p>
      </div>
      <div className="p2 w-[69rem] mt-5 flex flex-wrap gap-x-24 items-start justify-center">
        {projectItems.map((project) => (
          <div
            key={project.id}
            className={`relative w-[500px] rounded-[12px] p-10 h-[41.75rem] mb-12 ${
              theme === "light"
                ? project.themeSpecificBg.light
                : project.themeSpecificBg.dark
            }`}
          >
            <h2
              className={`font-[Playfair] font-bold text-[29px] leading-[3rem] ${
                theme === "light" ? "text-black" : "text-[#FFFFFF]"
              }`}
            >
              {project.name}
            </h2>
            <p
              className={`w-[23rem] mt-4 pb-4 ${
                theme === "light" ? "text-black" : "text-[#FFFFFF]"
              }`}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, idx) => (
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
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectsData.viewOnGithub}
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectsData.goToApp}
              </a>
            </div>
            <img
              src={projectImages[project.imageUrl] || project.imageUrl}
              alt={project.name}
              className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

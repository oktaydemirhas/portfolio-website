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
      className={`flex flex-col justify-center items-center py-12 sm:py-16 ${
        theme === "dark" ? "bg-[#484148] text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl w-full">
        <p
          className={`font-[Inter] font-medium text-3xl sm:text-4xl leading-tight sm:leading-[3.625rem] tracking-[0.01em] text-center pb-8 sm:pb-10 ${
            theme === "light" ? "text-[#0A0A14]" : "text-[#FFFFFF]"
          }`}
        >
          {sectionTitle}
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
        {projectItems.map((project) => (
          <div
            key={project.id}
            className={`relative flex flex-col rounded-[12px] p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden ${
              theme === "light"
                ? project.themeSpecificBg.light + " text-black"
                : project.themeSpecificBg.dark + " text-white"
            }`}
            style={{ minHeight: "480px" }}
          >
            <div className="flex-grow">
              <h2
                className={`font-[Playfair] font-bold text-2xl sm:text-[29px] leading-snug sm:leading-[3rem] mb-3 sm:mb-4 ${
                  theme === "light" ? "text-black" : "text-[#FFFFFF]"
                }`}
              >
                {project.name}
              </h2>
              <p
                className={`text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`font-[Playfair] font-semibold text-xs sm:text-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 transition-colors ${
                      theme === "light"
                        ? "text-black bg-white/70 hover:bg-white"
                        : "text-white bg-black/30 hover:bg-black/50"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto">
              <div
                className={`flex justify-between font-semibold text-sm sm:text-base md:text-lg leading-snug sm:leading-[150%] mb-6 sm:mb-8`}
              >
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline transition-colors ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  {projectsData.viewOnGithub}
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline transition-colors ${
                    theme === "light" ? "text-black" : "text-white"
                  }`}
                >
                  {projectsData.goToApp}
                </a>
              </div>
              <div className="relative h-48 sm:h-56 md:h-64 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8">
                <img
                  src={projectImages[project.imageUrl] || project.imageUrl}
                  alt={project.name}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto h-full max-h-[200px] sm:max-h-[240px] md:max-h-[280px] object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

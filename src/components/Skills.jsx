import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import siteData from "../data/data.js";

import localFigmaLogo from "../assets/figma-logo.png";
import localVsCodeLogo from "../assets/vscode-logo.png";
import localNodeLogo from "../assets/node-logo.png";
import localReduxLogo from "../assets/redux-logo.png";
import localReactLogo from "../assets/react-logo.png";
import localJavascriptLogo from "../assets/js-logo.png";

const icons = {
  FigmaLogo: localFigmaLogo,
  VsCodeLogo: localVsCodeLogo,
  NodeLogo: localNodeLogo,
  ReduxLogo: localReduxLogo,
  ReactLogo: localReactLogo,
  JavascriptLogo: localJavascriptLogo,
};

function Skills() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const skillsData = siteData[language].skillsSection;

  return (
    <section
      className={`flex flex-col justify-center items-center py-12 sm:py-16 ${
        theme === "dark" ? "bg-[#484148] text-white" : "bg-gray-50 text-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl w-full">
        <p
          className={`font-[Inter] font-medium text-3xl sm:text-4xl leading-tight sm:leading-[3.625rem] tracking-[0.01em] text-center pb-8 sm:pb-10 ${
            theme === "light" ? "text-[#0A0A14]" : "text-white"
          }`}
        >
          {skillsData.title}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 place-items-center">
          {skillsData.skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-3 sm:p-4 transition-transform hover:scale-105 w-full h-full"
            >
              <img
                src={icons[skill.iconKey]}
                alt={skill.name}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain mb-2 sm:mb-3"
              />
              <p
                className={`font-[Inter] font-medium text-xs sm:text-sm md:text-base leading-snug ${
                  theme === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

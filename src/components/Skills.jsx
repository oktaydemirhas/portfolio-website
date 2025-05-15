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
      className={`left-0 top-0 flex items-center justify-center py-16 ${
        theme === "dark" ? "bg-[#484148]" : ""
      }`}
    >
      <div className="w-[58.875rem]">
        <p
          className={`font-[Inter] font-medium text-4xl leading-[3.625rem] tracking-[0.01em] flex justify-center ${
            theme === "light" ? "text-[#0A0A14]" : "text-white"
          }`}
        >
          {skillsData.title}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 pt-10 w-full">
          {skillsData.skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[7.5rem] h-[10.375rem]"
            >
              <img
                src={icons[skill.iconKey]}
                alt={skill.name}
                className="w-[7.5rem] h-[7.5rem] object-contain"
              />
              <p
                className={`mt-2 font-[Inter] font-medium text-[1.2rem] leading-[150%] ${
                  theme === "light" ? "text-[#777777]" : "text-[#D9D9D9]"
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

import React from "react";
import FigmaLogo from "../assets/figma-logo.png";
import VsCodeLogo from "../assets/vscode-logo.png";
import NodeLogo from "../assets/node-logo.png";
import ReduxLogo from "../assets/redux-logo.png";
import ReactLogo from "../assets/react-logo.png";
import JavascriptLogo from "../assets/js-logo.png";

const mockSkills = [
  { name: "JAVASCRIPT", icon: JavascriptLogo },
  { name: "REACT", icon: ReactLogo },
  { name: "REDUX", icon: ReduxLogo },
  { name: "NODE", icon: NodeLogo },
  { name: "VS CODE", icon: VsCodeLogo },
  { name: "FIGMA", icon: FigmaLogo },
];

function Skills() {
  return (
    <section className="left-0 top-0 flex items-center justify-center py-16">
      <div className="w-[58.875rem]">
        <p className="font-[Inter] font-medium text-4xl leading-[3.625rem] tracking-[0.01em] text-[#0A0A14] flex justify-center">
          Skills
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 pt-10 w-full">
          {mockSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[7.5rem] h-[10.375rem]"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-[7.5rem] h-[7.5rem] object-contain"
              />
              <p className="mt-2 font-[Inter] font-medium text-[1.2rem] leading-[150%] text-[#777777]">
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

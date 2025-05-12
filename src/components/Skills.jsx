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
    <section className="h-[30.625rem] left-0 top-0 flex items-center justify-center ">
      <div className="h-[20rem] w-[58.875rem]">
        <div className="">
          <p className="font-[Inter] font-medium text-5xl leading-[3.625rem] tracking-[0.01em] text-[#0A0A14] flex justify-center">
            Skills
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 pt-10">
          {mockSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[7.5rem] h-[10.375rem]"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-[7.5rem] h-[10.375rem] object-contain"
              />
              <p className="font-[Inter] font-medium text-[1.2rem] leading-[150%] text-[#777777]">
                {skill.name}
              </p>
            </div>
          ))}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Skills;

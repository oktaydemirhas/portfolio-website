import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import linkedinIcon from "../assets/LinkedIn.png";
import githubIcon from "../assets/github.png";
import heroImg from "../assets/foto.png";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section
      className={`left-0 top-0 flex items-center justify-center py-16 ${
        theme === "light" ? "bg-[#F4F4F4]" : "bg-[#2A262B] text-white"
      }`}
    >
      <div className="flex flex-col w-[69rem] h-[35rem] ">
        <div className="p1 flex flex-row flex-wrap-reverse justify-end items-stretch content-end gap-x-4 mb-10 basis-1/6">
          <div
            className="p1-b1 w-[11rem] flex flex-row items-center"
            onClick={toggleTheme}
            style={{ cursor: "pointer" }}
          >
            <div
              className={`w-14 h-6 rounded-full flex items-center p-1 ${
                theme === "light" ? "bg-[#E92577]" : "bg-[#000000]"
              }`}
            >
              <div className={`${theme === "light" ? "ml-auto" : ""}`}>
                {theme === "light" ? (
                  <div className="w-4 h-4 rounded-full bg-[#FFE86E]"></div>
                ) : (
                  <div className="relative w-3 h-3">
                    <div className="w-full h-full rounded-full bg-yellow-400"></div>
                    <div
                      className="absolute w-3 h-3 rounded-full bg-[#000000]"
                      style={{ top: "0px", left: "5px" }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p
                className={`pl-3 font-[Inter] font-bold text-base ${
                  theme === "light" ? "text-[#777777]" : "text-gray-300"
                }`}
              >
                {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
              </p>
            </div>
          </div>
          <div
            className={`p1-b2 pr-2 font-[Inter] font-bold text-base ${
              theme === "light" ? "text-[#777777]" : "text-gray-400"
            }`}
          >
            |
          </div>
          <div className="p1-b3">
            <span
              className={`font-[Inter] font-bold text-base ${
                theme === "light" ? "text-[#E92577]" : "text-[#E92577]"
              }`}
            >
              TÜRKÇE
            </span>
            <span
              className={`font-[Inter] font-bold text-base ${
                theme === "light" ? "text-[#777777]" : "text-gray-400"
              }`}
            >
              'YE GEÇ
            </span>
          </div>
        </div>

        <div className="p2 flex flex-row flex-nowrap justify-start items-stretch content-between basis-5/6">
          <div className="p2-b1 flex flex-col flex-nowrap justify-between items-stretch content-stretch gap-4 basis-3/5 ">
            <div className="p2-b1-o1">
              <p
                className={`font-[Inter] font-normal text-[1.875rem] leading-[2.25rem] m-[-0.25rem] ${
                  theme === "light" ? "text-black" : "text-[#FFFFFF]"
                }`}
              >
                Hi! 👋
              </p>
              <p
                className={`font-[Inter] font-medium text-[42px] leading-[64px] m-[-0.25rem] ${
                  theme === "light" ? "text-black" : "text-[#FFFFFF]"
                }`}
              >
                I'm Almila. I'm a full-stack developer. I can craft solid and
                scalable frontend products. Let's meet!
              </p>
            </div>
            <div className="p2-b1-o2">
              <div className="p2-b1-o2-pu1 flex gap-4 pl-0 py-4 pr-4">
                <a href="#" className="block ml-0">
                  <img
                    src={linkedinIcon}
                    alt="linkedin"
                    className={`w-8 h-8 ${
                      theme === "dark" ? "filter invert" : ""
                    }`}
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src={githubIcon}
                    alt="github"
                    className={`w-8 h-8 ${
                      theme === "dark" ? "filter invert" : ""
                    }`}
                  />
                </a>
              </div>
              <div className="p2-b1-o2-pu2">
                <p
                  className={`font-[Inter] font-normal text-[1rem] leading-[2rem] m-[-0.15rem] ${
                    theme === "light" ? "text-[#000000]" : "text-[#FFFFFF]"
                  }`}
                >
                  Currently{" "}
                  <span
                    className={`${
                      theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
                    }`}
                  >
                    Freelancing
                  </span>{" "}
                  for{" "}
                  <span
                    className={`${
                      theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
                    }`}
                  >
                    UX, UI, & Web Design
                  </span>{" "}
                  Project. <br />
                  Invite me to join your team →{" "}
                  <span
                    className={`underline underline-offset-4 ${
                      theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
                    }`}
                  >
                    pratamaiosi@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="p2-b2 flex flex-row-reverse items-center basis-2/5 ">
            <img src={heroImg} alt="hero-right" className="mb-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

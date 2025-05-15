import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import siteData from "../data/data.js";
import localLinkedinIcon from "../assets/LinkedIn.png";
import localGithubIcon from "../assets/github.png";
import localHeroImg from "../assets/foto.png";

const icons = {
  linkedinIcon: localLinkedinIcon,
  githubIcon: localGithubIcon,
};

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const heroData = siteData[language].heroSection;
  const currentProfileImage =
    heroData.profileImage === "../assets/foto.png"
      ? localHeroImg
      : heroData.profileImage;

  const langToggleData = heroData.languageToggle;

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
          <div
            className="p1-b3"
            onClick={toggleLanguage}
            style={{ cursor: "pointer" }}
          >
            {language === "en" ? (
              <>
                <span
                  className={`font-[Inter] font-bold text-base text-[#E92577]`}
                >
                  {langToggleData.vurguluKisim}
                </span>
                <span
                  className={`font-[Inter] font-bold text-base ${
                    theme === "light" ? "text-[#777777]" : "text-gray-400"
                  }`}
                >
                  {langToggleData.kalanKisim}
                </span>
              </>
            ) : (
              /* language === 'tr' */
              <>
                <span
                  className={`font-[Inter] font-bold text-base ${
                    theme === "light" ? "text-[#777777]" : "text-gray-400"
                  }`}
                >
                  {langToggleData.kalanKisim}
                </span>
                <span
                  className={`font-[Inter] font-bold text-base text-[#E92577]`}
                >
                  {langToggleData.vurguluKisim}
                </span>
              </>
            )}
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
                {heroData.greeting}
              </p>
              <p
                className={`font-[Inter] font-medium text-[42px] leading-[64px] m-[-0.25rem] ${
                  theme === "light" ? "text-black" : "text-[#FFFFFF]"
                }`}
              >
                {heroData.nameIntro} {heroData.roleDescription}{" "}
                {heroData.invitation}
              </p>
            </div>
            <div className="p2-b1-o2">
              <div className="p2-b1-o2-pu1 flex gap-4 pl-0 py-4 pr-4">
                {heroData.socialLinks.map((link) => (
                  <a
                    href={link.url}
                    key={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block ml-0"
                  >
                    <img
                      src={icons[link.iconKey]}
                      alt={link.name}
                      className={`w-8 h-8 ${
                        theme === "dark" &&
                        (link.iconKey === "linkedinIcon" ||
                          link.iconKey === "githubIcon")
                          ? "filter invert"
                          : ""
                      }`}
                    />
                  </a>
                ))}
              </div>
              <div className="p2-b1-o2-pu2">
                <p
                  className={`font-[Inter] font-normal text-[1rem] leading-[2rem] m-[-0.15rem] ${
                    theme === "light" ? "text-[#000000]" : "text-[#FFFFFF]"
                  }`}
                >
                  {heroData.status.currently}{" "}
                  <span
                    className={`${
                      theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
                    }`}
                  >
                    {heroData.status.statusText}
                  </span>{" "}
                  {heroData.status.forText}{" "}
                  <span
                    className={`${
                      theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
                    }`}
                  >
                    {heroData.status.projectDetails}
                  </span>{" "}
                  <br />
                  {heroData.status.invitationPrefix}{" "}
                  <span
                    className={`underline underline-offset-4 ${
                      theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
                    }`}
                  >
                    {heroData.status.email}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="p2-b2 flex flex-row-reverse items-center basis-2/5 ">
            <img src={currentProfileImage} alt="hero-right" className="mb-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

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
      className={`flex items-center justify-center py-12 sm:py-16 ${
        theme === "light" ? "bg-[#F4F4F4]" : "bg-[#2A262B] text-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col max-w-6xl">
        <div className="flex flex-row flex-wrap-reverse justify-center sm:justify-end items-center gap-x-4 mb-8 sm:mb-10">
          <div
            className="p1-b1 w-auto sm:w-[11rem] flex flex-row items-center cursor-pointer mb-4 sm:mb-0"
            onClick={toggleTheme}
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
                className={`pl-3 font-[Inter] font-bold text-sm sm:text-base ${
                  theme === "light" ? "text-[#777777]" : "text-gray-300"
                }`}
              >
                {theme === "light" ? "DARK MODE" : "LIGHT MODE"}
              </p>
            </div>
          </div>
          <div
            className={`hidden sm:block p1-b2 pr-2 font-[Inter] font-bold text-base ${
              theme === "light" ? "text-[#777777]" : "text-gray-400"
            }`}
          >
            |
          </div>
          <div className="p1-b3 cursor-pointer" onClick={toggleLanguage}>
            {language === "en" ? (
              <>
                <span
                  className={`font-[Inter] font-bold text-sm sm:text-base text-[#E92577]`}
                >
                  {langToggleData.vurguluKisim}
                </span>
                <span
                  className={`font-[Inter] font-bold text-sm sm:text-base ${
                    theme === "light" ? "text-[#777777]" : "text-gray-400"
                  }`}
                >
                  {langToggleData.kalanKisim}
                </span>
              </>
            ) : (
              <>
                <span
                  className={`font-[Inter] font-bold text-sm sm:text-base ${
                    theme === "light" ? "text-[#777777]" : "text-gray-400"
                  }`}
                >
                  {langToggleData.kalanKisim}
                </span>
                <span
                  className={`font-[Inter] font-bold text-sm sm:text-base text-[#E92577]`}
                >
                  {langToggleData.vurguluKisim}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left lg:basis-3/5">
            <div>
              <p
                className={`font-[Inter] font-normal text-xl sm:text-2xl md:text-[1.875rem] leading-snug sm:leading-tight ${
                  theme === "light" ? "text-black" : "text-[#FFFFFF]"
                }`}
              >
                {heroData.greeting}
              </p>
              <p
                className={`font-[Inter] font-medium text-3xl sm:text-4xl md:text-[42px] leading-tight md:leading-[54px] mt-1 ${
                  theme === "light" ? "text-black" : "text-[#FFFFFF]"
                }`}
              >
                {heroData.nameIntro} {heroData.roleDescription}{" "}
                {heroData.invitation}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 justify-center lg:justify-start">
                {heroData.socialLinks.map((link) => (
                  <a
                    href={link.url}
                    key={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={icons[link.iconKey]}
                      alt={link.name}
                      className={`w-7 h-7 sm:w-8 sm:h-8 transition-transform hover:scale-110 ${
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
              <p
                className={`font-[Inter] font-normal text-sm sm:text-base leading-relaxed ${
                  theme === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {heroData.status.currently}{" "}
                {language === "en" ? (
                  <>
                    <span
                      className={`${
                        theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
                      } font-semibold`}
                    >
                      {heroData.status.statusText}
                    </span>{" "}
                    {heroData.status.forText}{" "}
                    <span
                      className={`${
                        theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
                      } font-semibold`}
                    >
                      {heroData.status.projectDetails}{" "}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className={`${
                        theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
                      } font-semibold`}
                    >
                      {heroData.status.projectDetails}{" "}
                    </span>{" "}
                    {heroData.status.forText}{" "}
                    <span
                      className={`${
                        theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
                      } font-semibold`}
                    >
                      {heroData.status.statusText}{" "}
                    </span>
                  </>
                )}{" "}
                <br className="hidden sm:inline" />
                {heroData.status.invitationPrefix}{" "}
                <a
                  href={`mailto:${heroData.status.email}`}
                  className={`underline underline-offset-4 font-semibold transition-colors ${
                    theme === "light"
                      ? "text-[#AF0C48] hover:text-[#8a0a3a]"
                      : "text-[#EA2678] hover:text-[#c71f66]"
                  }`}
                >
                  {heroData.status.email}
                </a>
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center lg:basis-2/5 mt-8 lg:mt-0 order-first lg:order-last">
            <img
              src={currentProfileImage}
              alt="hero-right"
              className="w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

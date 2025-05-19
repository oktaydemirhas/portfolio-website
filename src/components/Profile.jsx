import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import siteData from "../data/data.js";

function Profile() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const profileData = siteData[language].profileSection;

  return (
    <section
      className={`flex flex-col justify-center items-center py-12 sm:py-16 ${
        theme === "light" ? "bg-[#F4F4F4]" : "bg-[#2A262B] text-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl w-full">
        <p
          className={`font-[Inter] font-medium text-3xl sm:text-4xl leading-tight sm:leading-[3.625rem] tracking-[0.01em] text-center pb-8 sm:pb-10 ${
            theme === "light" ? "text-[#0A0A14]" : "text-[#FFFFFF]"
          }`}
        >
          {profileData.title}
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl w-full flex flex-col lg:flex-row mt-5 gap-8 lg:gap-12">
        <div className="relative lg:basis-1/2 w-full">
          <div className="absolute w-full h-full bg-[rgba(82,82,82,0.5)] rounded-[0.75rem] mt-2 ml-2 hidden sm:block"></div>
          <div
            className={`relative w-full rounded-[0.75rem] p-6 sm:p-8 md:p-10 ${
              theme === "light"
                ? "bg-white shadow-lg"
                : "bg-[#525252] shadow-lg"
            }`}
          >
            <div className="w-full">
              <div
                className={`mb-6 sm:mb-8 font-[Playfair] font-normal text-xl sm:text-2xl leading-snug sm:leading-8 tracking-[0.01em] ${
                  theme === "light" ? "text-[#EA2678]" : "text-[#EA2678]"
                }`}
              >
                {profileData.basicInfoTitle}
              </div>
              {profileData.details.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row mt-4 py-2 border-b border-gray-300 dark:border-gray-600 last:border-b-0"
                >
                  <p
                    className={`font-[Inter] font-semibold text-sm sm:text-base leading-snug sm:leading-[22px] tracking-[0.01em] basis-full sm:basis-2/5 mb-1 sm:mb-0 ${
                      theme === "light" ? "text-gray-800" : "text-gray-100"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`font-[Inter] font-normal text-sm sm:text-base leading-snug sm:leading-[18px] tracking-[0.01em] basis-full sm:basis-3/5 ${
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:basis-1/2 w-full flex justify-start items-center mt-8 lg:mt-0">
          <div className="w-full">
            <p
              className={`font-[Playfair] font-normal text-xl sm:text-2xl leading-snug sm:leading-[32px] tracking-[0.01em] mb-4 sm:mb-5 ${
                theme === "light" ? "text-black" : "text-[#FFFFFF]"
              }`}
            >
              {profileData.aboutMeTitle}
            </p>
            <div
              className={`font-[Inter] font-normal text-sm sm:text-base md:text-lg leading-relaxed sm:leading-[150%] tracking-[0.01em] ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
              dangerouslySetInnerHTML={{ __html: profileData.bio }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

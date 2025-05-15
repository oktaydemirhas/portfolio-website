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
      className={`left-0 top-0 flex flex-col justify-center items-center py-16 ${
        theme === "light" ? "bg-[#F4F4F4]" : "bg-[#2A262B]"
      }`}
    >
      <div className="w-[69rem]">
        <p
          className={`font-[Inter] font-medium text-4xl leading-[3.625rem] tracking-[0.01em] flex justify-center pb-5 ${
            theme === "light" ? "text-[#0A0A14]" : "text-[#FFFFFF]"
          }`}
        >
          {profileData.title}
        </p>
      </div>
      <div className="w-[69rem] flex mt-5">
        <div className="relative basis-1/2">
          <div className="absolute w-[31.25rem] h-[19.563rem] bg-[rgba(82,82,82,0.5)] rounded-[0.75rem] mt-2 ml-2"></div>
          <div
            className={`relative w-[31.25rem] h-[19.563rem] rounded-[0.75rem] ${
              theme === "light" ? "bg-white" : "bg-[#525252]"
            }`}
          >
            <div className="ml-12 w-[28rem] pt-10">
              <div
                className={`mb-8 h-8 font-[Playfair] font-normal text-2xl leading-8 tracking-[0.01em] ${
                  theme === "light" ? "text-[#EA2678]" : "text-[#EA2678]"
                }`}
              >
                {profileData.basicInfoTitle}
              </div>
              {profileData.details.map((item, index) => (
                <div key={index} className="flex flex-col mt-4">
                  <div className="flex flex-row">
                    <p
                      className={`font-[Inter] font-semibold text-[16px] leading-[22px] tracking-[0.01em] basis-2/5 ${
                        theme === "light" ? "text-black" : "text-[#FFFFFF]"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`pr-14 h-[2rem] font-[Inter] font-normal text-[16px] leading-[18px] tracking-[0.01em] basis-3/5 ${
                        theme === "light" ? "text-black" : "text-[#FFFFFF]"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pl-12 flex justify-start items-center basis-1/2">
          <div className="w-[30rem]">
            <p
              className={`font-[Playfair] font-normal text-[24px] leading-[32px] tracking-[0.01em] ${
                theme === "light" ? "text-black" : "text-[#FFFFFF]"
              }`}
            >
              {profileData.aboutMeTitle}
            </p>
            <p
              className={`font-[Inter] font-normal text-[18px] leading-[150%] tracking-[0.01em] pt-5 ${
                theme === "light" ? "text-black" : "text-[#FFFFFF]"
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

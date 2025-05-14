import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-14 ${theme === "light" ? "bg-white" : "bg-[#484148]"}`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-5 py-14">
        <div className="mb-8 mb-0 text-center md:text-left">
          <h2
            className={`text-4xl font-medium leading-tight text-right pr-10 ${
              theme === "light" ? "text-[#0A0A14]" : "text-[#FFFFFF]"
            }`}
          >
            Let&apos;s work together on
            <br />
            your next product.
          </h2>
        </div>
        <div className="flex flex-col space-y-2 items-start">
          <a
            href="#"
            className={`text-lg hover:underline font-[Inter] font-medium text-[24px] leading-[150%] ${
              theme === "light" ? "text-[#1769FF]" : "text-[#82BBFF]"
            }`}
          >
            Github
          </a>
          <a
            href="#"
            className={`text-lg hover:underline font-[Inter] font-medium text-[24px] leading-[150%] ${
              theme === "light" ? "text-[#0A0A14]" : "text-[#FFFFFF]"
            }`}
          >
            Personal Blog
          </a>
          <a
            href="#"
            className={`text-lg hover:underline font-[Inter] font-medium text-[24px] leading-[150%] ${
              theme === "light" ? "text-[#0077B5]" : "text-[#419CCB]"
            }`}
          >
            Linkedin
          </a>
          <a
            href="#"
            className={`text-lg hover:underline font-[Inter] font-medium text-[24px] leading-[150%] ${
              theme === "light" ? "text-[#AF0C48]" : "text-[#EA2678]"
            }`}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

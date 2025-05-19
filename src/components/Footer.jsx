import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import siteData from "../data/data.js";
import axios from "axios";

function Footer() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const footerData = siteData[language].footer;

  const sendData = async () => {
    setLoading(true);
    setError(null);

    try {
      const profileDetails = siteData[language].profileSection.details;

      const response = await axios.post(
        "https://reqres.in/api/workintech",
        profileDetails,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );

      console.log("API Response:", response.data);
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message || "Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      className={`py-14 ${theme === "light" ? "bg-white" : "bg-[#484148]"}`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-5 py-14">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2
            className={`text-4xl font-medium leading-tight md:text-right md:pr-10 ${
              theme === "light" ? "text-[#0A0A14]" : "text-[#FFFFFF]"
            }`}
            dangerouslySetInnerHTML={{ __html: footerData.title }}
          ></h2>
        </div>
        <div className="flex flex-col space-y-2 items-start">
          {footerData.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg hover:underline font-[Inter] font-medium text-[24px] leading-[150%] ${
                theme === "light" ? link.styleLight : link.styleDark
              }`}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={sendData}
            disabled={loading}
            className={`mt-4 px-4 py-2 rounded font-[Inter] font-medium text-[18px] transition-colors duration-150 ${
              theme === "light"
                ? "bg-[#E92577] text-white hover:bg-[#d41e6a] disabled:bg-pink-300"
                : "bg-[#EA2678] text-white hover:bg-[#d41e6a] disabled:bg-pink-700"
            } disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {loading ? "Gönderiliyor..." : "API Demo (POST)"}
          </button>

          {error && (
            <p
              className={`mt-2 text-[16px] ${
                theme === "light" ? "text-red-600" : "text-red-400"
              }`}
            >
              Hata: {error}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

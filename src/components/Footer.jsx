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
      className={`py-10 sm:py-14 ${
        theme === "light" ? "bg-white text-black" : "bg-[#484148] text-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl w-full flex flex-col md:flex-row justify-center items-center text-center md:text-left gap-8 md:gap-10">
        <div className="md:basis-3/5 md:pr-8 lg:pr-10">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-medium leading-normal md:text-right ${
              theme === "light" ? "text-[#0A0A14]" : "text-[#FFFFFF]"
            }`}
            dangerouslySetInnerHTML={{ __html: footerData.title }}
          ></h2>
        </div>
        <div className="flex flex-col space-y-3 sm:space-y-4 items-center md:items-start md:basis-2/5">
          {footerData.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-base sm:text-lg hover:underline font-[Inter] font-medium transition-colors ${
                theme === "light"
                  ? link.styleLight + " hover:text-opacity-80"
                  : link.styleDark + " hover:text-opacity-80"
              }`}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={sendData}
            disabled={loading}
            className={`mt-3 sm:mt-4 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-[Inter] font-semibold text-sm sm:text-base transition-colors duration-150 shadow-md hover:shadow-lg ${
              theme === "light"
                ? "bg-[#E92577] text-white hover:bg-[#d41e6a] disabled:bg-pink-300"
                : "bg-[#EA2678] text-white hover:bg-[#d41e6a] disabled:bg-pink-700"
            } disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {loading ? "Gönderiliyor..." : "API Demo (POST)"}
          </button>

          {error && (
            <p
              className={`mt-2 text-sm sm:text-base ${
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

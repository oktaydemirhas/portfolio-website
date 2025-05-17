import React from "react";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { useLanguage } from "../contexts/LanguageContext.jsx";
import siteData from "../data/data.js";
import { toast } from "react-toastify";

function Footer() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const footerData = siteData[language].footer;

  const showNotification = () => {
    toast("Bu basit bir bildirim!"); // Varsayılan (info) bildirim
    // toast.success("Başarılı işlem!");
    // toast.error("Bir hata oluştu!");
    // toast.warn("Uyarı mesajı!");
    // toast.info("Bilgilendirme mesajı.");
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
        </div>
      </div>
      <button onClick={showNotification}>Bildirim Göster</button>
    </footer>
  );
}

export default Footer;

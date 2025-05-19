import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // sayfa yüklendiğinde localStorage'dan dil tercihini al
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? storedLanguage : "en";
  });

  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const newLang = prevLang === "en" ? "tr" : "en";
      if (newLang === "tr") {
        toast.success("Türkçe Diline Geçildi.");
      } else {
        toast.success("İngilizce Diline Geçildi.");
      }
      return newLang;
    });
  };

  // localStorage'ı güncelle
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

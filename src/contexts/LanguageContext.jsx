import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // sayfa yüklendiğinde localStorage'dan dil tercihini al
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? storedLanguage : "en";
  });

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "tr" : "en"));
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

import React, { createContext, useState, useContext } from "react"

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")

  const translations = {
    en: {
      home: "Home",
      products: "Products",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      // Add more translations here
    },
    ar: {
      home: "الرئيسية",
      products: "المنتجات",
      aboutUs: "من نحن",
      contactUs: "اتصل بنا",
      // Add more translations here
    },
  }

  const t = (key) => translations[language][key] || key

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

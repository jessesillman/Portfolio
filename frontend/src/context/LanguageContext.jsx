import React, { createContext, useState, useContext } from 'react';

// Luo konteksti
const LanguageContext = createContext();

// Context-provider-komponentti
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English'); // Oletuskieli

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook kontekstin käyttämiseen
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
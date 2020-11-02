import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {},
};

const preload = Object.keys(resources);

const setUpI18n = () => {
  i18n
    .use(initReactI18next)
    .use(languageDetector)
    .init({
      resources,
      fallbackLng: "en",
      preload,
      interpolation: {
        escapeValue: false,
      },
    });
};
export default setUpI18n;

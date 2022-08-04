import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./i18n/en.json";
import es from "./i18n/es.json";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        es: {
            translation: es,
        },
    },
    lng: localStorage.getItem("lang") || "en",
});
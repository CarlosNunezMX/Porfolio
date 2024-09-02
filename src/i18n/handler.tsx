import spanish from "./es.json";
import english from "./en.json";

export type langs = "en" | "es";

const langs = {
    es: spanish,
    en: english
};

export const getI18N = ({ currentLocale }: { currentLocale: langs }) => {
    return langs[currentLocale] ?? spanish
}
import { useTranslation } from "react-i18next";

export const useLocalePath = () => {
  const { i18n } = useTranslation("common");

  const getPath = (path: string) => {
    const locale = i18n.language || "fr";
    return `/${locale}${path}`;
  };

  return { getPath };
};

export const getLocalePath = (path: string, locale: string = "fr") => {
  return `/${locale}${path}`;
};

export const isRTL = (locale: string) => {
  return locale === "ar";
};

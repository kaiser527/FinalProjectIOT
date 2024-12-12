import { CHANGE_LANGUAGE } from "./types";

export const changeLanguageApp = (language) => {
  return {
    type: CHANGE_LANGUAGE,
    language: language,
  };
};

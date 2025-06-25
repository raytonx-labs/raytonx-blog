import { en } from "./en";
import { zh } from "./zh";

const locales = { zh, en };

export function getI18n(locale: string) {
  return locales[locale as keyof typeof locales] || locales["en"];
}

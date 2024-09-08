import en from "@assets/dictionaries/en/en.json";
import es from "@assets/dictionaries/es/es.json";
import fa from "@assets/dictionaries/fa/fa.json";
import fr from "@assets/dictionaries/fr/fr.json";
import hi from "@assets/dictionaries/hi/hi.json";
import nl from "@assets/dictionaries/nl/nl.json";

import type { Locale } from "@i18n-config";
import "server-only";

const dictionaries = {
  en,
  nl,
  es,
  fr,
  fa,
  hi,
};

export type Dictionaries = (typeof dictionaries)["en"];

export const getDictionary = async (locale: Locale) => dictionaries[locale];

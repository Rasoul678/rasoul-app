import en from "@assets/dictionaries/en/en.json";
import es from "@assets/dictionaries/es/es.json";
import fa from "@assets/dictionaries/fa/fa.json";
import fr from "@assets/dictionaries/fr/fr.json";
import hi from "@assets/dictionaries/hi/hi.json";
import nl from "@assets/dictionaries/nl/nl.json";
import type { Locale } from "@i18n-config";

const dictionaries = {
  en,
  nl,
  es,
  fr,
  fa,
  hi,
};

export const getSyncDictionary = (locale: Locale) => dictionaries[locale];

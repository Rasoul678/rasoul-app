"use client";

import React from "react";
import { createContext } from "react";

import { Dictionaries } from "@app/[lang]/dictionaries";
import type { Locale } from "@i18n-config";

export const IntlContext = createContext<{
  dict: Dictionaries;
  lang: Locale;
} | null>(null);

interface IProps {
  children: React.ReactNode;
  dict: Dictionaries;
  lang: Locale;
}

export const ServerIntlProvider: React.FC<IProps> = ({
  children,
  dict,
  lang,
}) => {
  return (
    <IntlContext.Provider value={{ dict, lang }}>
      {children}
    </IntlContext.Provider>
  );
};

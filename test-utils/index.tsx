import { ReactElement } from "react";

import { queries, render, RenderOptions, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ServerIntlProvider from "@components/intl-provider";
import type { Locale } from "@i18n-config";
import { getSyncDictionary } from "@utils/getSyncDictionary";
import RQProvider from "@utils/react-query/provider";

import * as customQueries from "./custom-queries";

type IProviderType = {
  children: React.ReactNode;
};

type RenderOptionType = Omit<RenderOptions, "queries" | "wrapper"> & {
  locale?: Locale;
};

const allQueries = {
  ...queries,
  ...customQueries,
};

const customScreen = within(document.body, allQueries);

const customWithin = (element: ReactElement & HTMLElement) =>
  within(element, allQueries);

//* https://testing-library.com/docs/example-react-intl/
const customRender = (ui: ReactElement, options?: RenderOptionType) => {
  const { locale, ...restOptions } = options || {};

  const AllTheProviders: React.FC<IProviderType> = ({ children }) => {
    const lang = options?.locale || "en";
    const dict = getSyncDictionary(lang);

    return (
      <RQProvider>
        <ServerIntlProvider dict={dict} lang={lang}>
          {children}
        </ServerIntlProvider>
      </RQProvider>
    );
  };

  return render(ui, {
    queries: allQueries,
    wrapper: AllTheProviders,
    ...restOptions,
  });
};

export * from "@testing-library/react";
export {
  customRender as render,
  customScreen as screen,
  userEvent,
  customWithin as within,
};

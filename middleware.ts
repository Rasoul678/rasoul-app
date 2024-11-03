import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getDBUser } from "@utils";

import { i18n } from "./i18n-config";

function getLocale(request: NextRequest): string | undefined {
  //! Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  //! Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

const PUBLIC_FILE = /\.(.*)$/;
export const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const user = await getDBUser();

  const matches = pathname.match(/\w+/gi);
  const home_url = new URL("/", request.url);

  if (matches?.includes("articles") && !user.authorization.show_articles) {
    return NextResponse.redirect(home_url);
  }

  if (matches?.includes("live") && !user.authorization.show_live_code) {
    return NextResponse.redirect(home_url);
  }

  //! / `/_next/` and `/api/` are ignored by the matcher, but we need to ignore files in `public` manually.
  //! If you have one
  if (
    [
      "/favicon.ico",
      "/fonts/",
      "/og-main-image.png",
      "/manifest.webmanifest",
    ].includes(pathname)
  ) {
    return;
  }

  //! Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  //! Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    //! e.g. incoming request is /products
    //! The new URL is now /en/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
};

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|og-main-image.png).*)",
  ],
};

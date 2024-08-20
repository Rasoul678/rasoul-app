import type { Metadata } from "next";

export const getMyMetadata: () => Metadata = () => ({
  title: {
    template: "@ME | %s",
    default: "Rasoul's Portfolio",
  },
  description: "This website shows my portfolio",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Typescript",
    "Rasoul Hesami Rostami",
  ],
  generator: "Next.js",
  authors: [
    { name: "Rasoul Hesami Rostami", url: "https://rasoul-app.vercel.app" },
  ],
  creator: "Rasoul Hesami Rostami",
  metadataBase: new URL("https://rasoul-app.vercel.app"),
  manifest: "/en/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "de-DE": "/de",
      "fa-IR": "/fa",
      "fr-FR": "/fr",
      "hi-IN": "/hi",
      "nl-NL": "/nl",
      "es-ES": "/es",
    },
  },
  openGraph: {
    title: "Dev Portfolio",
    description: "This website shows my portfolio",
    siteName: "Rasoul Portfolio",
    images: "/en/og-main-image.png",
    locale: "en_US",
    type: "website",
    emails: "h.rostami.r@gmail.com",
    alternateLocale: [
      "en_US",
      "de_DE",
      "fa_IR",
      "fr_FR",
      "hi_IN",
      "nl_NL",
      "es_ES",
    ],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["h.rostami.r@gmail.com"],
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
});

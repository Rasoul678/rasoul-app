import {
  Caveat,
  Concert_One,
  Edu_VIC_WA_NT_Beginner,
  Exo_2,
  Lilita_One,
  Quicksand,
} from "next/font/google";
import localFont from "next/font/local";

export const iranSans = localFont({
  src: [
    {
      path: "../public/fonts/IranSans/ttf/IRANSansWeb.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/IranSans/ttf/IRANSansWeb_Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-iransans",
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
  adjustFontFallback: false,
});

export const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
  adjustFontFallback: false,
});

export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  adjustFontFallback: false,
});

export const edu = Edu_VIC_WA_NT_Beginner({
  subsets: ["latin"],
  variable: "--font-edu",
  display: "swap",
  adjustFontFallback: false,
});

export const lilita = Lilita_One({
  subsets: ["latin"],
  variable: "--font-lilita",
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

export const concert = Concert_One({
  subsets: ["latin"],
  variable: "--font-concert",
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

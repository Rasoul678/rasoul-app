import localFont from "next/font/local";
import {
  Quicksand,
  Exo_2,
  Caveat,
  Edu_VIC_WA_NT_Beginner,
  Lilita_One,
  Concert_One,
} from "next/font/google";

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
});

export const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
});

export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const edu = Edu_VIC_WA_NT_Beginner({
  subsets: ["latin"],
  variable: "--font-edu",
});

export const lilita = Lilita_One({
  subsets: ["latin"],
  variable: "--font-lilita",
  weight: "400",
});

export const concert = Concert_One({
  subsets: ["latin"],
  variable: "--font-concert",
  weight: "400",
});

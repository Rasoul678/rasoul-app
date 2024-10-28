import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rasoul's Portfolio",
    short_name: "RaHeRo",
    description: "This website shows my portfolio",
    start_url: "/",
    display: "browser",
    background_color: "#fff",
    theme_color: "#000",
    // lang: "en-US",
    scope: "/",
    orientation: "landscape",
    dir: "auto",
  };
}

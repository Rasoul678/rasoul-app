import css from "@assets/icon-pack/icons8-css3-420.svg";
import git from "@assets/icon-pack/icons8-git-420.svg";
import html from "@assets/icon-pack/icons8-html-5-420.svg";
import js from "@assets/icon-pack/icons8-javascript-420.svg";
import postman from "@assets/icon-pack/icons8-postman-api-420.svg";
import redux from "@assets/icon-pack/icons8-redux.svg";
import ts from "@assets/icon-pack/icons8-typescript.svg";
import docker from "@assets/svg/docker-icon-svgrepo-com.svg";
import react from "@assets/svg/icons8-react-512.svg";
import webpack from "@assets/svg/icons8-webpack-512.svg";
import jest from "@assets/svg/jest-svgrepo-com.svg";
import nextjs from "@assets/svg/nextjs-svgrepo-com.svg";
import rust from "@assets/svg/rust-svgrepo-com.svg";
import tailwind from "@assets/svg/tailwindcss-icon-svgrepo-com.svg";
import wasn from "@assets/svg/webassembly-svgrepo-com.svg";
import { IconType } from "@types";

import { externalLinks } from "@utils/constants";

import GeneralIcon from "./GeneralIcon";

export type StackIconsType = {
  [key in (typeof stackLists)[number]]: (props?: IconType) => JSX.Element;
};

//! Map icons name to svg file
const IconsMap = {
  html: {
    url: externalLinks.HTML5,
    component: html,
  },
  css: {
    url: externalLinks.CSS5,
    component: css,
  },
  git: {
    url: externalLinks.GIT,
    component: git,
  },
  js: {
    url: externalLinks.JAVASCRIPT,
    component: js,
  },
  ts: {
    url: externalLinks.TYPESCRIPT,
    component: ts,
  },
  react: {
    url: externalLinks.REACTJS,
    component: react,
  },
  nextjs: {
    url: externalLinks.NEXTJS,
    component: nextjs,
  },

  docker: {
    url: externalLinks.DOCKER,
    component: docker,
  },
  redux: {
    url: externalLinks.REDUX,
    component: redux,
  },
  webpack: {
    url: externalLinks.WEBPACK,
    component: webpack,
  },
  postman: {
    url: externalLinks.POSTMAN,
    component: postman,
  },
  tailwindcss: {
    url: externalLinks.TAILWINDCSS,
    component: tailwind,
  },
  jest: {
    url: externalLinks.JEST,
    component: jest,
  },
  webassembly: {
    url: externalLinks.WEBASSEMBLY,
    component: wasn,
  },
  rust: {
    url: externalLinks.RUST,
    component: rust,
  },
};

const stackLists = [...Object.keys(IconsMap)] as Array<keyof typeof IconsMap>;

export const stackIcons: StackIconsType = stackLists.reduce(
  (acc: any, name: (typeof stackLists)[number]) => {
    acc[name] = (props?: IconType) => (
      <GeneralIcon
        asLink={{
          href: IconsMap[name].url,
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        src={IconsMap[name].component}
        alt={name}
        width={props?.width || 80}
        {...props}
      />
    );
    return acc;
  },
  {}
);

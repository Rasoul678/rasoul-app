import css from "@assets/icon-pack/css3.svg";
import git from "@assets/icon-pack/git.svg";
import html from "@assets/icon-pack/html_5.svg";
import js from "@assets/icon-pack/javascript.svg";
import postman from "@assets/icon-pack/postman_api.svg";
import redux from "@assets/icon-pack/redux.svg";
import ts from "@assets/icon-pack/typescript.svg";

import docker from "@assets/svg/docker.svg";
import jest from "@assets/svg/jest.svg";
import nextjs from "@assets/svg/next_js3.svg";
import react from "@assets/svg/react.svg";
import rust from "@assets/svg/rust1.svg";
import tailwind from "@assets/svg/tailwindcss.svg";
import wasn from "@assets/svg/webassembly.svg";
import webpack from "@assets/svg/webpack.svg";
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
    const { url, component } = IconsMap[name];
    acc[name] = (props?: IconType) => (
      <GeneralIcon
        asLink={{
          href: url,
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        src={component}
        alt={name}
        width={props?.width || 80}
        {...props}
      />
    );
    return acc;
  },
  {}
);

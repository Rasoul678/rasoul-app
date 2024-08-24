import css from "@assets/icon-pack/icons8-css3-420.svg";
import docker from "@assets/icon-pack/icons8-docker.svg";
import git from "@assets/icon-pack/icons8-git-420.svg";
import html from "@assets/icon-pack/icons8-html-5-420.svg";
import js from "@assets/icon-pack/icons8-javascript-420.svg";
import postman from "@assets/icon-pack/icons8-postman-api-420.svg";
import react from "@assets/icon-pack/icons8-react.svg";
import redux from "@assets/icon-pack/icons8-redux.svg";
import ts from "@assets/icon-pack/icons8-typescript.svg";
import webpack from "@assets/icon-pack/icons8-webpack.svg";
import nextjs from "@assets/svg/nextjs.svg";
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
  postman: {
    url: externalLinks.POSTMAN,
    component: postman,
  },
  react: {
    url: externalLinks.REACTJS,
    component: react,
  },
  nextjs: {
    url: externalLinks.NEXTJS,
    component: nextjs,
  },
  ts: {
    url: externalLinks.TYPESCRIPT,
    component: ts,
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

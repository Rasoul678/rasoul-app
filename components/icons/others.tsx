import { IconType } from "@types";

import { importIconPack } from "@utils";

import GeneralIcon from "./GeneralIcon";

type OtherIconsType = {
  [key in (typeof iconLists)[number]]: (props?: IconType) => JSX.Element;
};

const iconLists = [
  "fido",
  "gmail",
  "mail",
  "idea",
  "menu",
  "translate",
  "ok",
  "javascript",
  "folder",
  "opened_folder",
  "phone",
  "user_male",
  "google_maps",
  "google_maps_old",
  "for_you",
  "dino",
  "restart",
  "uncheck_all",
  "download",
  "info",
  "resume_doc",
  "resume_man",
  "target",
  "curriculum_resume",
  "worker",
] as const;

export const otherIcons: OtherIconsType = iconLists.reduce(
  (acc: any, value: (typeof iconLists)[number]) => {
    const iconSrc = importIconPack(value);
    acc[value] = (props?: IconType) => (
      <GeneralIcon src={iconSrc} alt={value} {...props} />
    );
    return acc;
  },
  {}
);

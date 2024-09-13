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
  "opened-folder",
  "phone",
  "user-male",
  "google-maps",
  "google-maps-old",
  "for-you",
  "dino",
  "restart",
  "uncheck-all",
  "download",
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

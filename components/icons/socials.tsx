import { IconType } from "@types";

import { importIconPack } from "@utils";

import GeneralIcon from "./GeneralIcon";

export type SocialListType = (typeof socialLists)[number];

export type SocialIconsType = {
  [key in SocialListType]: (props?: IconType) => JSX.Element;
};
const socialLists = [
  "discord",
  "github",
  "linkedin",
  "medium",
  "reddit",
  "stack-overflow",
  "twitterx",
  "telegram",
  "youtube",
] as const;

export const socialIcons: SocialIconsType = socialLists.reduce(
  (acc: any, value: (typeof socialLists)[number]) => {
    const iconSrc = importIconPack(value);
    acc[value] = (props?: IconType) => (
      <GeneralIcon
        src={iconSrc}
        alt={value}
        className="cursor-pointer"
        width={50}
        {...props}
      />
    );
    return acc;
  },
  {}
);

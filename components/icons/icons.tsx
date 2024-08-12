import { otherIcons } from "./others";
import { socialIcons } from "./socials";
import { stackIcons } from "./stacks";

export const iconsList = {
  stacks: {
    ...stackIcons,
  },
  socials: {
    ...socialIcons,
  },
  ...otherIcons,
};

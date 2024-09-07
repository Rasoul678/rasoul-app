import chatGPT from "@assets/icon-pack/icons8-chatgpt-420.svg";
import edit from "@assets/icon-pack/icons8-edit-420.svg";
import home from "@assets/icon-pack/icons8-fido-420.svg";
import folder from "@assets/icon-pack/icons8-folder-420.svg";
import forYou from "@assets/icon-pack/icons8-for-you-420.svg";
import gmail from "@assets/icon-pack/icons8-gmail-420.svg";
import googleMaps from "@assets/icon-pack/icons8-google-maps-420.svg";
import googleMapsOld from "@assets/icon-pack/icons8-google-maps-old-420.svg";
import lang from "@assets/icon-pack/icons8-google-translate-new-420.svg";
import ideas from "@assets/icon-pack/icons8-idea-420.svg";
import js from "@assets/icon-pack/icons8-javascript-420.svg";
import mail from "@assets/icon-pack/icons8-mail-420.svg";
import menu from "@assets/icon-pack/icons8-menu-420.svg";
import ok from "@assets/icon-pack/icons8-ok-420.svg";
import openFolder from "@assets/icon-pack/icons8-opened-folder-420.svg";
import logout from "@assets/icon-pack/icons8-out-420.svg";
import phone from "@assets/icon-pack/icons8-phone-420.svg";
import plus from "@assets/icon-pack/icons8-plus-420.svg";
import restart from "@assets/icon-pack/icons8-restart-420.svg";
import fingerprint from "@assets/icon-pack/icons8-touch-id-420.svg";
import remove from "@assets/icon-pack/icons8-trash-can-420.svg";
import uncheckAll from "@assets/icon-pack/icons8-uncheck-all-420.svg";
import user from "@assets/icon-pack/icons8-user-male-420.svg";
import dino from "@assets/svg/icons8-steve-jumping-dino-512.svg";
import { IconType } from "@types";

import GeneralIcon from "./GeneralIcon";

type OtherIconsType = {
  [key in (typeof otherLists)[number]]: (props?: IconType) => JSX.Element;
};

const IconsMap = {
  edit: edit,
  home: home,
  gmail: gmail,
  mail: mail,
  ideas: ideas,
  plus: plus,
  fingerprint: fingerprint,
  remove: remove,
  uncheckAll: uncheckAll,
  menu: menu,
  logout: logout,
  lang: lang,
  chatGPT: chatGPT,
  ok: ok,
  js: js,
  folder: folder,
  openFolder: openFolder,
  phone: phone,
  user: user,
  googleMaps: googleMaps,
  googleMapsOld: googleMapsOld,
  forYou: forYou,
  dino: dino,
  restart: restart,
};

const otherLists = [...Object.keys(IconsMap)] as Array<keyof typeof IconsMap>;

export const otherIcons: OtherIconsType = otherLists.reduce(
  (acc: any, value: (typeof otherLists)[number]) => {
    acc[value] = (props?: IconType) => (
      <GeneralIcon src={IconsMap[value]} alt={value} {...props} />
    );
    return acc;
  },
  {}
);

import React from "react";

import { usePathname, useRouter } from "next/navigation";

import { iconsList } from "@components/icons";
import { IntlContext } from "@components/intl-provider";
import ProfileImage from "@components/ProfileImage";
import { i18n, Locale } from "@i18n-config";

import { MenuItem } from "./Item";

type IProps = {};

const MenuContents: React.FC<IProps> = () => {
  const intl = React.useContext(IntlContext);

  const pathName = usePathname();
  const router = useRouter();

  const isPersian = intl?.lang === "fa";

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleSelectChange = (locale: Locale) => {
    const path = redirectedPathName(locale);
    router.push(path);
  };

  return (
    <>
      <MenuItem
        noBorder
        name={intl?.dict.about}
        href="about"
        icon={<ProfileImage wrapperClassName="w-[2rem]" animationType="hue" />}
      />

      <MenuItem
        name={intl?.dict.language}
        dir={isPersian ? "right" : "left"}
        subMenu={i18n.locales.map((locale) => ({
          name: intl?.dict.lang[locale],
          onClick: () => handleSelectChange(locale),
        }))}
        icon={iconsList.lang({
          alt: intl?.dict.language,
          width: 35,
        })}
      />
    </>
  );
};

export default MenuContents;

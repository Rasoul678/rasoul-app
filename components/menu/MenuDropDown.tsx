import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { iconsList } from "@components/icons";
import { IntlContext } from "@components/intl-provider";
import { Locale, i18n } from "@i18n-config";
import { MenuItem, Triangle } from "./components";
import ProfileImage from "@components/ProfileImage";
import { PersonUserObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface IProps {
  user?: PersonUserObjectResponse;
}

const MenuDropDown: React.FC<IProps> = ({ user }) => {
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
    <div className="menu-wrapper">
      <Triangle />
      <MenuItem
        noBorder
        name={String(intl?.dict["my-prof"])}
        href={`/${intl?.lang}/aboutme`}
        icon={<ProfileImage wrapperClassName="w-[2rem]" animationType="hue" />}
      />

      <MenuItem
        name={String(intl?.dict.language)}
        dir={isPersian ? "right" : "left"}
        subMenu={i18n.locales.map((locale) => ({
          name: String(intl?.dict.lang[locale]),
          onClick: () => handleSelectChange(locale),
        }))}
        icon={iconsList.lang({
          alt: String(intl?.dict.language),
          width: 30,
        })}
      />
    </div>
  );
};

export default MenuDropDown;

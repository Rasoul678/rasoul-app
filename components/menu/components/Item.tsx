import React from "react";

import CustomLink from "@components/CustomLink";
import { ArrowIcon } from "@components/icons";
import { useClickOutside } from "@hooks/useClickOutside";

type IProps = {
  name: string | null | undefined;
  noBorder?: boolean;
  href?: string;
  onClick?: () => void;
  subMenu?: IProps[];
  dir?: "right" | "left";
  icon?: React.JSX.Element;
};

export const MenuItem: React.FC<IProps> = (props) => {
  const { name, noBorder, href, onClick, subMenu, dir = "left", icon } = props;
  const [showSub, setShowSub] = React.useState(false);
  const clickRef = React.useRef(null);

  useClickOutside({ ref: clickRef, callback: () => setShowSub(false) });

  const handleClickItem = () => {
    setShowSub(true);
    !href && !subMenu && onClick?.();
  };

  return (
    <div
      className={`py-2 flex flex-row-reverse w-full justify-between items-center ${
        noBorder ? "" : "border-t sm:border-none"
      } border-gray-200`}
      onClick={handleClickItem}
    >
      {href ? (
        <CustomLink
          href={href}
          className="flex flex-row-reverse items-center gap-4"
        >
          {icon}
          <div className="menu-link block sm:hidden">{name}</div>
        </CustomLink>
      ) : (
        <div className="flex items-center flex-row-reverse gap-4">
          {icon}
          <div className="relative flex-1">
            <div className={`menu-regular block ${subMenu && "sm:hidden"}`}>
              {name}
            </div>
            {subMenu && showSub && (
              <div
                ref={clickRef}
                className={`sub-menu-wrapper ${
                  dir === "right"
                    ? "right-[10rem] sm:right-0 top-0 sm:top-[1.7rem]"
                    : "left-[10rem] sm:left-0 top-0 sm:top-[1.7rem]"
                }`}
              >
                {subMenu?.map((sub, idx) => {
                  return (
                    <MenuItem noBorder={idx === 0} key={sub.name} {...sub} />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
      {!href && subMenu && (
        <div className="block sm:hidden">
          <ArrowIcon dir={dir} />
        </div>
      )}
    </div>
  );
};

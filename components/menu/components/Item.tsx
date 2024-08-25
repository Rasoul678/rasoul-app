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
      className={`py-3 flex w-full items-center gap-2 ${
        noBorder ? "" : "border-t"
      } border-gray-200`}
      onClick={handleClickItem}
    >
      {icon}
      {href ? (
        <CustomLink href={href}>
          <div className="menu-link block sm:hidden">{name}</div>
        </CustomLink>
      ) : (
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
      )}
      {!href && subMenu && (
        <div className="block sm:hidden">
          <ArrowIcon dir={dir} />
        </div>
      )}
    </div>
  );
};

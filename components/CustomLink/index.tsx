"use client";

import Link from "next/link";
import { PropsWithChildren, useContext } from "react";
import { IntlContext } from "@components/intl-provider";
import { CustomLinkType } from "@types";

type IProps = {};

const CustomLink = (props: PropsWithChildren<IProps & CustomLinkType>) => {
  const { children, href, ...others } = props;

  const intl = useContext(IntlContext);

  return (
    <Link {...others} href={`/${intl?.lang}/${href}`}>
      {children}
    </Link>
  );
};

export default CustomLink;

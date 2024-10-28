"use client";

import { PropsWithChildren, useContext } from "react";

import Link from "next/link";

import { IntlContext } from "@components/intl-provider";

import { CustomLinkType } from "@types";

type IProps = {};

/**
 * A custom link component that wraps the Next.js Link component and prepends the current language to the href.
 *
 * @param props - The props for the custom link component.
 * @param props.children - The content to be rendered inside the link.
 * @param props.href - The URL path to link to, without the language prefix.
 * @param props.others - Any additional props to be passed to the Next.js Link component.
 * @returns A React element representing the custom link.
 */
const CustomLink = (props: PropsWithChildren<IProps & CustomLinkType>) => {
  const { children, href, locale: _, ...others } = props;

  const intl = useContext(IntlContext);

  return (
    <Link {...others} href={`/${intl?.lang}/${href}`}>
      {children}
    </Link>
  );
};

export default CustomLink;

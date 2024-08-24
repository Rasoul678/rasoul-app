import React from "react";

import Image from "next/image";
import Link from "next/link";

import { CustomLinkType } from "@types";

interface IProps {
  alt?: string;
  title?: string;
  className?: string;
  height?: number;
  width?: number;
  src: typeof import("*.svg");
  asLink?: CustomLinkType;
}

const GeneralIcon: React.FC<IProps> = (props) => {
  const {
    alt = "image",
    title = alt,
    width = 35,
    height = width,
    className = "",
    src,
    asLink,
  } = props;

  if (asLink) {
    return (
      <Link {...asLink}>
        <Image
          src={src}
          className={className}
          title={title}
          alt={alt}
          width={width}
          height={height}
          tabIndex={0}
          data-vi={`vi-${alt}`}
        />
      </Link>
    );
  }

  return (
    <Image
      src={src}
      className={className}
      title={title}
      alt={alt}
      width={width}
      height={height}
      tabIndex={0}
      data-vi={`vi-${alt}`}
    />
  );
};

export default GeneralIcon;

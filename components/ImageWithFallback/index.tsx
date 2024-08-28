import { useState } from "react";

import { ImageProps, StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type IProps = Exclude<ImageProps, "src" | "alt"> & {
  onErrSrc?: string | StaticImport;
  src?: string | StaticImport;
  tesId?: string;
  alt: string;
};

const ImageWithFallback = (props: IProps) => {
  const { src, onErrSrc, alt, tesId, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      alt={alt}
      data-vi={`vi-${tesId || alt}`}
      src={imgSrc}
      {...rest}
      onError={() => {
        onErrSrc && setImgSrc(onErrSrc);
      }}
    />
  );
};

export default ImageWithFallback;

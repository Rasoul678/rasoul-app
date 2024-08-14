import { useState } from "react";

import { ImageProps, StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type IProps = ImageProps & {
  fallbackSrc?: string | StaticImport;
  src: string | StaticImport;
  alt: string;
};

const ImageWithFallback = (props: IProps) => {
  const { src, fallbackSrc = "", alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      alt={alt}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;

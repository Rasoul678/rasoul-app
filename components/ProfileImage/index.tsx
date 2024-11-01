import React from "react";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

import ProfileFrame from "@assets/frame.png";
import ProfilePic from "@assets/profile-pic-2.jpg";
import ImageWithFallback from "@components/ImageWithFallback";

interface IProps {
  wrapperClassName?: string;
  animationType?: "hue" | "spin";
  src?: string | StaticImport;
}

const ProfileImage: React.FC<IProps> = ({
  wrapperClassName,
  animationType = "spin",
  src,
}) => {
  return (
    <div className={`relative ${wrapperClassName}`}>
      <ImageWithFallback
        src={src || ProfilePic}
        alt="My-Picture"
        aria-label="my profile picture"
        width={150}
        height={150}
        className="rounded-full"
        onErrSrc={ProfilePic}
        priority={true}
      />
      <ImageWithFallback
        src={ProfileFrame}
        alt="my-frame"
        className={`avatar-frame ${
          animationType == "spin" ? "anim-spin" : "anim-hue"
        }`}
        width={300}
        height={300}
      />
    </div>
  );
};

export default ProfileImage;

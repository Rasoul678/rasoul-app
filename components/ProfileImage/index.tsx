import React from "react";

import ProfileFrame from "@assets/frame.png";
import ProfilePic from "@assets/profile-pic-2.jpg";
import ImageWithFallback from "@components/ImageWithFallback";

interface IProps {
  wrapperClassName?: string;
  animationType?: "hue" | "spin";
}

const ProfileImage: React.FC<IProps> = ({
  wrapperClassName,
  animationType = "spin",
}) => {
  return (
    <div className={`relative ${wrapperClassName}`}>
      <ImageWithFallback
        src={ProfilePic}
        alt="My-Picture"
        aria-label="my profile picture"
        width={150}
        height={150}
        className="rounded-full"
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

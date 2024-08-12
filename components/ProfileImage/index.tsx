import React from "react";

import Image from "next/image";

import ProfileFrame from "@assets/frame.png";
import ProfilePic from "@assets/profile-pic-2.jpg";

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
      <Image
        src={ProfilePic}
        alt="My-Picture"
        aria-label="my profile picture"
        width={150}
        height={150}
        className="rounded-full"
      />
      <Image
        src={ProfileFrame}
        alt="my-frame"
        className={`avatar-frame ${
          animationType == "spin" ? "anim-spin" : "anim-hue"
        }`}
        width={300}
        height={300}
      ></Image>
    </div>
  );
};

export default ProfileImage;

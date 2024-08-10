import Image from "next/image";
import React from "react";
import ProfilePic from "@assets/profile-pic-2.jpg";
import ProfileFrame from "@assets/frame.png";

interface IProps {
  wrapperClassName?: string;
}

const ProfileImage: React.FC<IProps> = ({ wrapperClassName }) => {
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
        className="avatar-frame anim-spin"
        width={150}
        height={150}
      ></Image>
    </div>
  );
};

export default ProfileImage;

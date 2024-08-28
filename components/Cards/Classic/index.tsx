import React from "react";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import ArticleCover from "@assets/wallpaper.jpg";
import ImageWithFallback from "@components/ImageWithFallback";

type IProps = {
  author?: string;
  title?: string | null;
  description?: string | null;
  src?: string | StaticImport;
  icon?: string | null;
};

/**
 * Renders a classic card component with an image, title, author, and optional description and icon.
 *
 * @param {IProps} props - The props for the classic card component.
 * @param {string} [props.author] - The author of the content.
 * @param {string | null} [props.title] - The title of the content.
 * @param {string | null} [props.description] - The description of the content.
 * @param {string | StaticImport} props.src - The source of the image for the card.
 * @param {string | null} [props.icon] - The optional icon to display on the card.
 * @returns {React.ReactElement} - The rendered classic card component.
 */
const ClassicCard: React.FC<IProps> = ({
  author,
  title,
  description,
  src,
  icon,
}) => {
  return (
    <div className="shadow-[0px_4px_16px_px_#367E08] h-[15rem] sm:h-[16rem] w-[10rem] sm:w-[12.5rem] md:w-[15rem] group gap-[0.5em] rounded-[0.5em] relative flex justify-end flex-col px-[.8em] py-[.5em] z-[1] overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full bg-[#111111]"></div>
      <ImageWithFallback
        className="absolute top-0 left-0 object-cover h-[8rem] sm:h-[9rem] max-h-[10.5rem]"
        alt={title || "card"}
        width={350}
        height={150}
        src={src || ArticleCover}
        onErrSrc={ArticleCover}
      />
      {icon && (
        <Image
          className="absolute top-[9rem] right-1 object-cover h-[2rem] max-h-[3.5rem]"
          alt={`${title}-icon`}
          width={30}
          height={40}
          src={icon}
        />
      )}
      <div className="container text-white z-[2] relative font-mono flex flex-col gap-[0.4em]">
        <div className="h-fit w-full text-white">
          <h1
            className="text-[1.3em] sm:text-[1.5em] tracking-[.0.5em]"
            style={textStyle}
          >
            {title || "Title"}
          </h1>
          <p
            className="text-[0.65em] sm:text-[0.75em] md:text-[0.8em] text-green-500 tracking-[.05em]"
            style={textStyle}
          >
            {author || "Author name"}
          </p>
        </div>
        <div className="flex justify-center items-center h-fit w-fit gap-[0.5em]">
          <div className="border-2 border-white rounded-[0.5em] text-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer">
            <p>Drama</p>
          </div>
          <div className="border-2 border-white rounded-[0.5em] text-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer">
            <p>Action</p>
          </div>
          <div className="border-2 border-white rounded-[0.5em] text-white font-nunito text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer">
            <p>Balls</p>
          </div>
        </div>
      </div>
      <p className="font-mono block text-white font-light relative h-[0em] group-hover:h-[4.5em] leading-[1.2em] duration-500 overflow-hidden">
        {description || "Description"}
      </p>
    </div>
  );
};

export default ClassicCard;

const textStyle = {
  fontWeight: 500,
  WebkitTextFillColor: "transparent",
  WebkitTextStrokeWidth: "1px",
  textShadow: "0 0 1px #fff",
};

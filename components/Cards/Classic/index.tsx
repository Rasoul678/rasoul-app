import React from "react";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

import ArticleCover from "@assets/wallpaper.jpg";
import ImageLoader from "@components/ImageLoader";
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
    <div className="shadow-[0px_4px_16px_px_#367E08] h-[6rem] min-[400px]:h-[7rem] sm:h-[16rem] w-full sm:w-auto group gap-[0.5em] rounded-[0.5em] relative flex flex-row-reverse justify-end sm:flex-col px-[.8em] py-[.5em] z-[1] overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full bg-[#111111]"></div>
      {src ? (
        <ImageWithFallback
          className="absolute top-0 right-0 sm:left-0 object-cover w-[7.5rem] min-[400px]:w-[9rem] sm:w-full h-full sm:h-[9rem] max-h-[10.5rem] border-l-[0.2rem] border-l-cyan-500 sm:border-none"
          alt={title || "card"}
          width={350}
          height={150}
          src={src}
          onErrSrc={ArticleCover}
        />
      ) : (
        <ImageLoader />
      )}
      <div className="text-white z-[2] sm:relative font-mono flex flex-col gap-[0.4em]">
        <div className="sm:h-fit w-full text-white">
          <h1
            className="text-[1em] sm:text-[1.5em] tracking-[.0.5em]"
            style={textStyle}
          >
            {title || "Title"}
          </h1>
          <p
            className="text-[0.65em] sm:text-[0.75em] md:text-[0.8em] text-cyan-500 tracking-[.05em]"
            style={textStyle}
          >
            {author || "Author name"}
          </p>
        </div>
      </div>
      <p className="font-my_quicksand text-[1rem] sm:text-[1.2rem] font-semibold block sm:hidden text-white relative w-[0em] group-hover:w-[calc(100%-2rem)] leading-[1.2em] duration-500 overflow-hidden">
        {description || "Description"}
      </p>
      <p className="font-my_quicksand text-[1rem] sm:text-[1.2rem] font-semibold hidden sm:block text-white relative h-[0em] group-hover:h-[5em] leading-[1.2em] duration-500 overflow-hidden">
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

import Image from "next/image";
import React from "react";
import ArticleCover from "@assets/wallpaper.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type IProps = {
  author?: string;
  title?: string | null;
  description?: string | null;
  src?: string | StaticImport;
};

const ClassicCard: React.FC<IProps> = ({ author, title, description, src }) => {
  return (
    <div className="shadow-[0px_4px_16px_px_#367E08] h-[23rem] w-[15.5rem] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full bg-[#111111]"></div>
      <Image
        className="absolute top-0 left-0 object-cover h-[10rem] max-h-[10.5rem]"
        alt="article-cover"
        width={350}
        height={150}
        src={src || ArticleCover}
      />
      <div className="container text-white z-[2] relative font-mono flex flex-col gap-[0.5em]">
        <div className="h-fit w-full text-white">
          <h1
            className="card_heading text-[1.5em] tracking-[.0.5em]"
            style={textStyle}
          >
            {title || "Title Title Title"}
          </h1>
          <p
            className="text-[1em] text-green-500 tracking-[.05em]"
            style={textStyle}
          >
            {author || "Author name"}
          </p>
        </div>

        <div className="flex justify-left items-center h-fit w-full gap-[1.5em]">
          <div className="w-fit h-fit flex justify-left gap-[0.5em]">
            <svg
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[1em] w-[1em]"
              fill="white"
            >
              <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path>
            </svg>
            <svg
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[1em] w-[1em]"
              fill="white"
            >
              <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path>
            </svg>
            <svg
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[1em] w-[1em]"
              fill="white"
            >
              <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path>
            </svg>
            <svg
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[1em] w-[1em]"
              fill="white"
            >
              <path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"></path>
            </svg>
            <svg
              viewBox="0 0 576 512"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[1em] w-[1em]"
              fill="white"
            >
              <path d="M288 439.6l-130.9 68.7C152.2 510.8 147.1 512 142.2 512c-18.59 0-35.17-16.66-31.61-37.45l25.04-145.5L29.72 226.1C10.68 207.6 21.2 175.3 47.47 171.5l146.4-21.29l65.43-132.4c5.883-11.91 17.33-17.8 28.73-17.8c.0234 0-.0234 0 0 0L288 439.6z"></path>
            </svg>
          </div>

          <div className="w-fit h-fit text-white font-nunito text-[1.2em] font-light">
            <p>4.5/5</p>
          </div>
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
      <p className="font-mono block text-white font-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden">
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

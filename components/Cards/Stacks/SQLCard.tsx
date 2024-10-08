import { routes } from "@utils";

import GeneralCard from "./GeneralCard";

type IProps = {};

const SQLCard: React.FC<IProps> = () => {
  return (
    <GeneralCard
      href={routes.ARTICLES_SQL}
      title="SQL"
      colors={{
        border: "border-[#cbe6ff]",
        bg: "bg-[#1f1e27]",
        bgHover: "hover:bg-[#cbe6ff]",
        text: "text-[#cbe6ff]",
        textHover: "hover:text-[#1e2127]",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="120"
        className="app-logo group-hover:motion-safe:animate-[wobble-hor-bottom_0.9s_ease-in_both]"
        aria-label="SQL"
        role="img"
      >
        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          id="SVGRepo_tracerCarrier"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            strokeWidth="1.5"
            stroke="#cbe6ff"
            d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
          ></path>
          <path
            strokeWidth="1.5"
            stroke="#cbe6ff"
            d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
          ></path>
          <path
            strokeWidth="1.5"
            stroke="#cbe6ff"
            d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
          ></path>
        </g>
      </svg>
    </GeneralCard>
  );
};

export default SQLCard;

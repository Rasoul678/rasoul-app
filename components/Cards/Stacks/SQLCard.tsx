import CustomLink from "@components/CustomLink";
import { routes } from "@utils";

type IProps = {};

const SQLCard: React.FC<IProps> = () => {
  return (
    <div className="stack-card group border-[#cbe6ff] text-[#cbe6ff] bg-[#1f1e27]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="120"
        className="app-logo group-hover:motion-safe:animate-[wobble-hor-bottom_0.9s_ease-in_both]"
        aria-label="SQL"
        role="img"
      >
        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          id="SVGRepo_tracerCarrier"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            stroke-width="1.5"
            stroke="#cbe6ff"
            d="M5 12V18C5 18 5 21 12 21C19 21 19 18 19 18V12"
          ></path>
          <path
            stroke-width="1.5"
            stroke="#cbe6ff"
            d="M5 6V12C5 12 5 15 12 15C19 15 19 12 19 12V6"
          ></path>
          <path
            stroke-width="1.5"
            stroke="#cbe6ff"
            d="M12 3C19 3 19 6 19 6C19 6 19 9 12 9C5 9 5 6 5 6C5 6 5 3 12 3Z"
          ></path>
        </g>
      </svg>
      <div>SQL</div>
      <CustomLink
        href={routes.ARTICLES_SQL}
        className="app-button border-[#cbe6ff] hover:text-[#1e2127] hover:bg-[#cbe6ff]"
      >
        Start reading
      </CustomLink>
    </div>
  );
};

export default SQLCard;

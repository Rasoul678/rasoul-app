import { routes } from "@utils";

import GeneralCard from "./GeneralCard";

type IProps = {};

const JavascriptCard: React.FC<IProps> = () => {
  return (
    <GeneralCard
      href={routes.ARTICLES_JAVASCRIPT}
      title="Javascript"
      colors={{
        border: "border-[#f7df1e]",
        bg: "bg-[#25241c]",
        bgHover: "hover:bg-[#f7df1e]",
        text: "text-[#f7df1e]",
        textHover: "hover:text-[#2e2d23]",
      }}
    >
      <svg
        className="app-logo group-hover:motion-safe:animate-[wobble-hor-bottom_0.9s_ease-in_both]"
        aria-label="JavaScript"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="420px"
        height="420px"
      >
        <path
          fill="#ffe082"
          d="M15.879,44C13.745,44,12,42.255,12,40.121V15.879C12,13.745,13.745,12,15.879,12h24.242	C42.255,12,44,13.745,44,15.879v24.242C44,42.255,42.255,44,40.121,44H15.879z"
        />
        <path
          fill="none"
          stroke="#18193f"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M7.5,28.559V11.5	c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v1.245"
        />
        <path
          fill="none"
          stroke="#18193f"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M40.5,18.617V36.5	c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4v-1.755"
        />
        <path
          fill="#18193f"
          d="M29.271,32.389c0.629,1.026,1.312,2.009,2.758,2.009c1.215,0,1.853-0.607,1.853-1.446	c0-1.005-0.659-1.362-1.996-1.946l-0.733-0.314c-2.115-0.901-3.522-2.031-3.522-4.418c0-2.199,1.675-3.873,4.294-3.873	c1.864,0,3.204,0.649,4.17,2.348l-2.283,1.466c-0.503-0.901-1.045-1.256-1.887-1.256c-0.859,0-1.403,0.545-1.403,1.256	c0,0.88,0.545,1.236,1.803,1.78l0.733,0.314c2.492,1.067,3.898,2.156,3.898,4.605c0,2.64-2.074,4.086-4.859,4.086	c-2.723,0-4.27-1.373-5.131-3.074L29.271,32.389z"
        />
        <path
          fill="#18193f"
          d="M18.623,32.464c0.466,0.827,1.176,1.462,2.195,1.462c0.975,0,1.537-0.381,1.537-1.864V22.4h3.074	v10.129c0,3.072-1.801,4.471-4.431,4.471c-2.376,0-4.091-1.593-4.79-3.074L18.623,32.464z"
        />
      </svg>
    </GeneralCard>
  );
};

export default JavascriptCard;

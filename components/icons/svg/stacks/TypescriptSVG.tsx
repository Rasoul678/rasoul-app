import React from "react";

interface IProps {}

export const TypescriptIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="250px"
      height="250px"
    >
      <path
        fill="#90caf9"
        d="M15.879,44C13.745,44,12,42.255,12,40.121V15.879C12,13.745,13.745,12,15.879,12h24.242	C42.255,12,44,13.745,44,15.879v24.242C44,42.255,42.255,44,40.121,44H15.879z"
      />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M8.5,28.559V11.5	c0-2.2,1.8-4,4-4h25c2.2,0,4,1.8,4,4v1.245"
      />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M41.5,18.617V38	c0,2.2-1.8,4-4,4h-25c-2.2,0-4-1.8-4-4v-1.755"
      />
      <polygon
        fill="#18193f"
        points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
      />
      <path
        fill="#18193f"
        d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986	c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92	c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
      />
    </svg>
  );
};

export default TypescriptIcon;

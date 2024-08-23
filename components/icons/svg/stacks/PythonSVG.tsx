import React from "react";

interface IProps {}

export const PythonIcon: React.FC<IProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="200px"
      height="200px"
    >
      <path
        fill="#FFE082"
        d="M45.587,21.559c-0.731-1.676-2.728-1.841-4.57-1.841h-4.735v-4.735c0-1.842-0.166-3.839-1.842-4.57	C32.979,9.779,31.41,9,28,9s-4.979,0.779-6.44,1.413c-1.676,0.731-1.842,2.728-1.842,4.57v4.735h-4.735	c-1.841,0-3.839,0.166-4.57,1.841C9.779,23.021,9,24.59,9,28c0,3.41,0.779,4.979,1.413,6.44c0.731,1.676,2.728,1.842,4.57,1.842	h4.735v4.735c0,1.842,0.166,3.839,1.842,4.57C23.021,46.221,24.59,47,28,47s4.979-0.779,6.44-1.413	c1.676-0.731,1.842-2.728,1.842-4.57v-4.735h4.735c1.841,0,3.839-0.166,4.57-1.842C46.221,32.979,47,31.41,47,28	C47,24.59,46.221,23.021,45.587,21.559z"
      />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeWidth="3"
        d="M32.5,15.5h4.86c1.89,0,3.94,0.17,4.69,1.89	c0.65,1.5,1.45,3.11,1.45,6.61s-0.8,5.11-1.45,6.61c-0.75,1.72-2.8,1.89-4.69,1.89H24.5"
      />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeWidth="3"
        d="M15,32.5h-4.36c-1.89,0-3.94-0.17-4.69-1.89	C5.3,29.11,4.5,27.5,4.5,24s0.8-5.11,1.45-6.61c0.75-1.72,2.8-1.89,4.69-1.89H23.5"
      />
      <path
        fill="none"
        stroke="#18193f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M15.5,10.64	c0-1.89,0.17-3.94,1.89-4.69C18.89,5.3,20.5,4.5,24,4.5s5.11,0.8,6.61,1.45c1.72,0.75,1.89,2.8,1.89,4.69V19c0,2.761-2.239,5-5,5h-7	c-2.761,0-5,2.239-5,5v8.36c0,1.89,0.17,3.94,1.89,4.69c1.5,0.65,3.11,1.45,6.61,1.45s5.11-0.8,6.61-1.45	c1.049-0.458,1.522-1.399,1.731-2.493"
      />
      <circle cx="20.5" cy="10.5" r="1.5" fill="#18193f" />
      <circle cx="27.5" cy="37.5" r="1.5" fill="#18193f" />
    </svg>
  );
};

export default PythonIcon;

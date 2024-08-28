import React from "react";

import Link from "next/link";

interface IProps {}

const Shortcuts: React.FC<IProps> = (props) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3  md:text-lg font-my_concert text-center w-full">
      <span
        className="text-teal-400 text-[1rem] sm:text-[1.2rem] p-1 border-b-2 border-cyan-200"
        tabIndex={0}
        aria-label="Tools"
      >
        <Link href="#tools">Tools</Link>
      </span>
      <span
        className="text-teal-400 text-[1rem] sm:text-[1.2rem] p-1 border-b-2 border-cyan-200"
        tabIndex={0}
        aria-label="Github"
      >
        <Link href="#github">Github</Link>
      </span>

      <span
        className="text-teal-400 text-[1rem] sm:text-[1.2rem] p-1 border-b-2 border-cyan-200 block"
        tabIndex={0}
        aria-label="Education"
      >
        <Link href="#education">Education</Link>
      </span>

      <span
        className="text-teal-400 text-[1rem] sm:text-[1.2rem] p-1 border-b-2 border-cyan-200 block"
        tabIndex={0}
        aria-label="Experience"
      >
        <Link href="#experience">Experience</Link>
      </span>
      <span
        className="text-teal-400 text-[1rem] sm:text-[1.2rem] p-1 border-b-2 border-cyan-200"
        tabIndex={0}
        aria-label="Github"
      >
        <Link href="#github">Github</Link>
      </span>
    </div>
  );
};

export default Shortcuts;

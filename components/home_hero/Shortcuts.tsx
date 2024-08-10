import Link from "next/link";
import React from "react"

interface IProps {}

const Shortcuts: React.FC<IProps> = (props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3  md:text-lg font-my_concert text-center">
          <span
            className="text-teal-400 text-[1.5rem] p-1 border-b-2 border-cyan-200 block"
            tabIndex={0}
            aria-label="Tools"
          >
            <Link href="#tools">Tools</Link>
          </span>
          <span
            className="text-teal-400 text-[1.5rem] p-1 border-b-2 border-cyan-200 block"
            tabIndex={0}
            aria-label="Github"
          >
            <Link href="#github">Github</Link>
          </span>

          <span
            className="text-teal-400 text-[1.5rem] p-1 border-b-2 border-cyan-200 block"
            tabIndex={0}
            aria-label="Education"
          >
            <Link href="#education">Education</Link>
          </span>

          <span
            className="text-teal-400 text-[1.5rem] p-1 border-b-2 border-cyan-200 block"
            tabIndex={0}
            aria-label="Experience"
          >
            <Link href="#experience">Experience</Link>
          </span>
        </div>
  )
};

export default Shortcuts;

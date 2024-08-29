import React from "react";

import useScrollTo from "@hooks/useScrollTo";

interface IProps {}

const Shortcuts: React.FC<IProps> = (props) => {
  const scrollTo = useScrollTo({ offset: 250 });

  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const target = e.target as HTMLSpanElement;
    const anchor = target.dataset.anchor;
    if (anchor) {
      scrollTo(anchor);
    }
  };

  return (
    <div className="shortCutsWrapper">
      <span
        className="shortCutItem"
        tabIndex={0}
        aria-label="Tools"
        data-anchor="tools"
        onClick={handleClick}
      >
        Tools
      </span>
      <span
        className="shortCutItem"
        tabIndex={0}
        aria-label="Github"
        data-anchor="github"
        onClick={handleClick}
      >
        Github
      </span>
      <span
        className="shortCutItem"
        tabIndex={0}
        aria-label="Education"
        data-anchor="education"
        onClick={handleClick}
      >
        Education
      </span>
      <span
        className="shortCutItem"
        tabIndex={0}
        aria-label="Experience"
        data-anchor="experience"
        onClick={handleClick}
      >
        Experience
      </span>
    </div>
  );
};

export default Shortcuts;

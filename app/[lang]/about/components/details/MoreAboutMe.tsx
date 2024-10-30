import React from "react";

import DescriptionColumn from "./DescriptionColumn";
import UserExcerptColumn from "./ExcerptColumn";

type IProps = {};

const MoreAboutMe: React.FC<IProps> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      ref={ref}
      className="container mx-auto my-5 p-3 bg-gray-800 rounded-xl"
    >
      <div className="sm:flex no-wrap md:-mx-2 ">
        <UserExcerptColumn />
        <DescriptionColumn />
      </div>
    </div>
  );
};

export default MoreAboutMe;

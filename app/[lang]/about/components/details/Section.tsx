import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  icon: JSX.Element;
  title: string;
}

const Section: React.FC<Props> = ({ children, icon, title }) => {
  return (
    <section className="bg-gray-900 p-3 shadow-sm rounded-md">
      <div className="text-gray-300 flex items-center space-x-2 font-semibold leading-8 mb-3">
        <span>{icon}</span>
        <span className="tracking-wide">{title}</span>
      </div>
      <ul className="list-inside space-y-2">{children}</ul>
    </section>
  );
};

export default Section;

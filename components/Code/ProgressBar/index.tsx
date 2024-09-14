import React from "react";

interface IProps {}

const ProgressBar: React.FC<IProps> = (props) => {
  return (
    <div className="progressWrapper">
      <progress max="100">Loading</progress>
    </div>
  );
};

export default ProgressBar;

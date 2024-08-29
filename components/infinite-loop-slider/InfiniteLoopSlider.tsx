"use client";

import React, { memo } from "react";

import TagsRow from "./components/TagsRow";

type IProps = {
  tagList?: string[];
  tagPerRow?: number;
  rows?: number;
  className?: string;
  color?: string;
  animate?: boolean;
  animationDir?: "left" | "right";
};

const ROWS = 3;
const TAG_PER_RWO = 30;

const InfiniteLoopSlider: React.FC<IProps> = (props) => {
  const {
    tagPerRow = TAG_PER_RWO,
    rows = ROWS,
    className,
    tagList,
    color,
    animate,
    animationDir = "left",
  } = props;

  const rowData = React.useMemo(() => [...new Array(rows)], [rows]);

  return (
    <div className={`tag-list ${className}`}>
      {rowData.map((_, i) => {
        return (
          <div
            key={i}
            data-direction={animationDir}
            data-animated={animate}
            className="loop-slider"
          >
            <TagsRow color={color} tagList={tagList} tagPerRow={tagPerRow} />
          </div>
        );
      })}
      <div className="fade" />
    </div>
  );
};

export default memo(InfiniteLoopSlider);

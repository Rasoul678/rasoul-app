import React from "react";

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

import InfiniteLoopSlider from "@components/infinite-loop-slider/InfiniteLoopSlider";

const TimeCrawler = dynamic(() =>
  import("./TimeCrawler").then((mod) => mod.default)
);

type IProps = {
  tagList?: string[];
  color?: string;
  title?: string;
  children?: ({ inView }: { inView: boolean }) => React.ReactNode;
  wrapperId?: string;
  withCrawler?: boolean;
  animate?: boolean;
  animationDir?: "left" | "right";
};

export const TimeSection: React.FC<IProps> = (props) => {
  const {
    color,
    tagList,
    title = "Time Title",
    children,
    wrapperId,
    withCrawler,
    animate,
    animationDir,
  } = props;
  const { ref, inView } = useInView();

  return (
    <div className="mt-8" id={wrapperId}>
      <p className="text-center text-xl sm:text-2xl p-2">{title}</p>
      <section
        ref={ref}
        className="grid place-items-center content-center relative min-h-[10rem]"
      >
        <div className="absolute flex justify-center items-center gap-4 top-0 rounded-sm w-[86%] z-10 bg-gray-800/40">
          <div className="overflow-hidden">
            <InfiniteLoopSlider
              animate={animate}
              animationDir={animationDir}
              tagList={tagList}
              color={color}
              rows={1}
              className="opacity-90"
            />
          </div>
        </div>
        <TimeCrawler withCrawler={withCrawler} color={color} />
        <TimeCrawler withCrawler={withCrawler} color={color} dir="right" />
        {children?.({ inView })}
      </section>
    </div>
  );
};

import { ImageResponse } from "next/og";

import { stackSVG, StackSVGType } from "@components/icons";
import { NextParamsType } from "@types";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function Icon({ params }: { params: NextParamsType }) {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          // background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {stackSVG[params.article as StackSVGType] || "R"}
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}

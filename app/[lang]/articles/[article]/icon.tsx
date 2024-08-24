import { ImageResponse } from "next/og";

import { stackSVG, StackSVGType } from "@components/icons";
import { Error404 } from "@components/icons/svg/NotFoundError";
import { NextParamsType } from "@types";

// Image metadata
export const size = {
  width: 200,
  height: 200,
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
        {stackSVG[params.article as StackSVGType] || <Error404 />}
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}

import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 27,
  height: 27,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 26,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "30%",
        }}
      >
        🌱
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}

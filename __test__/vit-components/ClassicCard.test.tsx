import { describe, expect, it } from "vitest";

import ArticleCover from "@assets/wallpaper.jpg";

import ClassicCard from "@components/Cards/Classic";
import { render } from "@test-utils";

describe("ClassicCard component", () => {
  it("should render with default props", () => {
    const { getByText, getByAltText } = render(
      <ClassicCard src={ArticleCover} />
    );
    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Author name")).toBeInTheDocument();
    expect(getByText("Description")).toBeInTheDocument();
    expect(getByAltText("card")).toBeInTheDocument();
  });

  it("should render with custom props", () => {
    const expectedSrc = expect.stringMatching("custom-image.jpg");
    const props = {
      author: "John Doe",
      title: "Custom Title",
      description: "Custom Description",
      src: "/custom-image.jpg",
      icon: "/custom-icon.svg",
    };
    const { getByText, getByAltText, getByDataVi } = render(
      <ClassicCard {...props} />
    );
    expect(getByText("Custom Title")).toBeInTheDocument();
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("Custom Description")).toBeInTheDocument();

    expect(getByDataVi("vi-Custom Title")).toHaveAttribute("src", expectedSrc);

    expect(getByAltText("Custom Title-icon")).toHaveAttribute(
      "src",
      props.icon
    );
  });

  it("should render genre tags", () => {
    const { getByText } = render(<ClassicCard src="/custom-image.jpg" />);
    expect(getByText("Drama")).toBeInTheDocument();
    expect(getByText("Action")).toBeInTheDocument();
    expect(getByText("Balls")).toBeInTheDocument();
  });

  it("should use fallback image when src is not provided", async () => {
    const expectedSrc = expect.stringMatching("assets%2Fwallpaper.jpg");

    const { getByAltText } = render(<ClassicCard />);

    const image = getByAltText("card");
    expect(image).toHaveAttribute("src", expectedSrc);
  });

  it("should not render icon when not provided", () => {
    const { queryByAltText } = render(<ClassicCard src="/custom-image.jpg" />);
    expect(queryByAltText(/icon$/)).not.toBeInTheDocument();
  });

  it("should have correct dimensions", () => {
    const { container } = render(<ClassicCard src="/custom-image.jpg" />);
    const card = container.firstChild;
    expect(card).toHaveClass("h-[15rem]", "w-[10rem]");
  });

  it("should have hover effect on description", () => {
    const { getByText } = render(<ClassicCard src="/custom-image.jpg" />);
    const description = getByText("Description");
    expect(description).toHaveClass("group-hover:h-[4.5em]");
  });
});

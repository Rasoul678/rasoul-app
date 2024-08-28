import { describe, expect, it } from "vitest";

import JavascriptCard from "@components/Cards/Stacks/JavascriptCard";
import { render } from "@test-utils";
import { routes } from "@utils";

describe("JavascriptCard component", () => {
  it("should render with correct class names", () => {
    const { container } = render(<JavascriptCard />);
    const card = container.firstChild;
    expect(card).toHaveClass(
      "stack-card",
      "border-[#f7df1e]",
      "text-[#f7df1e]",
      "bg-[#25241c]"
    );
  });

  it("should render the JavaScript logo", () => {
    const { getByRole } = render(<JavascriptCard />);
    const logo = getByRole("img", { name: "JavaScript" });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("viewBox", "0 0 48 48");
  });

  it("should display 'Javascript' text", () => {
    const { getByText } = render(<JavascriptCard />);
    expect(getByText("Javascript")).toBeInTheDocument();
  });

  it("should render a CustomLink with correct props", () => {
    const expectedHref = expect.stringMatching(routes.ARTICLES_JAVASCRIPT);

    const { getByText } = render(<JavascriptCard />);
    const link = getByText("Start reading");
    expect(link).toHaveAttribute("href", expectedHref);
    expect(link).toHaveClass(
      "app-button",
      "border-[#f7df1e]",
      "hover:text-[#2e2d23]",
      "hover:bg-[#f7df1e]"
    );
  });

  it("should have correct SVG paths", () => {
    const { container } = render(<JavascriptCard />);
    const paths = container.querySelectorAll("path");
    expect(paths).toHaveLength(5);
    expect(paths[0]).toHaveAttribute("fill", "#ffe082");
    expect(paths[1]).toHaveAttribute("stroke", "#18193f");
    expect(paths[2]).toHaveAttribute("stroke", "#18193f");
    expect(paths[3]).toHaveAttribute("fill", "#18193f");
    expect(paths[4]).toHaveAttribute("fill", "#18193f");
  });
});

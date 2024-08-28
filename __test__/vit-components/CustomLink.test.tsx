import { describe, expect, it } from "vitest";

import CustomLink from "@components/CustomLink";
import { render } from "@test-utils";

describe("CustomLink component", () => {
  it("should render with default props", () => {
    const { getByRole } = render(<CustomLink href="/">Link</CustomLink>);
    const link = getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/en/");
    expect(link).toHaveTextContent("Link");
  });

  it("should render with custom className", () => {
    const { getByRole } = render(
      <CustomLink href="/" className="custom-class">
        Link
      </CustomLink>
    );
    const link = getByRole("link");
    expect(link).toHaveClass("custom-class");
  });

  it("should render with target attribute", () => {
    const { getByRole } = render(
      <CustomLink href="/" target="_blank">
        Link
      </CustomLink>
    );
    const link = getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should render with rel attribute for external links", () => {
    const { getByRole } = render(
      <CustomLink
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        External Link
      </CustomLink>
    );
    const link = getByRole("link");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should render children correctly", () => {
    const { getByRole } = render(
      <CustomLink href="/">
        <span>Child Element</span>
      </CustomLink>
    );
    const link = getByRole("link");
    expect(link).toContainHTML("<span>Child Element</span>");
  });
});

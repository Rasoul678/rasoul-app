import { describe, expect, it } from "vitest";

import Astronaut from "@components/Astronaut";
import { IntlContext } from "@components/intl-provider";
import { render } from "@test-utils";

describe("Astronaut component", () => {
  it("should contains default prop", () => {
    const { getByDataVi } = render(<Astronaut />);
    const astrHead = getByDataVi("vit-astr-head");

    expect(astrHead).toBeDefined();
    expect(astrHead).toHaveTextContent("Follow me");
  });

  it("should render with right lang", () => {
    const { getByDataVi } = render(<Astronaut />, { locale: "fa" });
    const astrHead = getByDataVi("vit-astr-head");

    expect(astrHead).toBeDefined();
    expect(astrHead).toHaveTextContent("در ارتباط باش");
  });

  it("should contains given prop", () => {
    const { getByDataVi } = render(<Astronaut heading="My Heading" />);
    const astrHead = getByDataVi("vit-astr-head");

    expect(astrHead).toBeDefined();
    expect(astrHead).toHaveTextContent("My Heading");
  });

  it("should contains heading with prop change", () => {
    const { getByDataVi, rerender } = render(
      <Astronaut heading="My Heading" />
    );

    let astrHead = getByDataVi("vit-astr-head");

    expect(astrHead).toBeInTheDocument();
    expect(astrHead).toHaveTextContent("My Heading");

    // re-render the same component with different props
    // https://testing-library.com/docs/react-testing-library/api/#rerender
    rerender(<Astronaut heading="My Heading changed" />);
    astrHead = getByDataVi("vit-astr-head");

    expect(astrHead).toBeInTheDocument();
    expect(astrHead).toHaveTextContent("My Heading changed");
  });

  it("should render image with appropriate alt text", () => {
    const { getByDataVi } = render(<Astronaut />);

    const image = getByDataVi("vi-my-astronaut-avatar");
    expect(image).toHaveAttribute("alt", "my-astronaut-avatar");
  });

  it("should render social media images", () => {
    const { getByDataVi } = render(<Astronaut />);
    const expectedSrc = "/assets/icon-pack/icons8-linkedin-circled-420.svg";

    const githubIcon = getByDataVi("vi-github");
    const linkedinIcon = getByDataVi("vi-linkedin");

    expect(githubIcon).toHaveAttribute("alt", "github");
    expect(linkedinIcon).toHaveAttribute("src", expectedSrc);
  });

  it("should render with custom className", () => {
    const { container } = render(<Astronaut className="custom-class" />);
    expect(container.querySelector(".image")).toHaveClass("custom-class");
  });

  it("should use IntlContext for default heading", () => {
    const mockIntl = { dict: { "follow-me": "Test Follow Me" } } as any;
    const { getByDataVi } = render(
      <IntlContext.Provider value={mockIntl}>
        <Astronaut />
      </IntlContext.Provider>
    );
    const astrHead = getByDataVi("vit-astr-head");
    expect(astrHead).toHaveTextContent("Test Follow Me");
  });

  it("should render social media links", () => {
    const { container } = render(<Astronaut />);
    const socialLinks = container.querySelectorAll(
      ".flex.justify-center.gap-2 a"
    );
    expect(socialLinks).toHaveLength(1);
    expect(socialLinks[0]).toHaveAttribute("href", "#");
  });

  it("should render ImageWithFallback component with correct props", () => {
    const { getByDataVi } = render(<Astronaut />);
    const image = getByDataVi("vi-my-astronaut-avatar");
    expect(image).toHaveAttribute("width", "500");
    expect(image).toHaveAttribute("height", "500");
  });

  it("should render social media icons", () => {
    const { getByDataVi } = render(<Astronaut />);
    expect(getByDataVi("vi-github")).toBeInTheDocument();
    expect(getByDataVi("vi-linkedin")).toBeInTheDocument();
    expect(getByDataVi("vi-twitter")).toBeInTheDocument();
  });
});

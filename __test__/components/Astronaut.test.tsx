import { describe, expect, it } from "vitest";

import Astronaut from "@components/Astronaut";
import { render } from "@test-utils";

describe("Astronaut component", () => {
  it("should contains default prop", () => {
    const { getByText } = render(<Astronaut />);
    expect(getByText("Follow me")).toBeDefined();
    expect(getByText("Follow me")).toHaveTextContent("Follow me");
  });

  it("should render with right lang", () => {
    const { getByDataVi } = render(<Astronaut />, { locale: "fa" });
    expect(getByDataVi("astronaut-vi")).toBeDefined();
    expect(getByDataVi("astronaut-vi")).toHaveTextContent("در ارتباط باش");
  });

  it("should contains given prop", () => {
    const { getByText } = render(<Astronaut heading="My Heading" />);
    expect(getByText("My Heading")).toBeDefined();
    expect(getByText("My Heading")).toHaveTextContent("My Heading");
  });

  it("should contains heading with prop change", () => {
    const { getByText, rerender } = render(<Astronaut heading="My Heading" />);
    expect(getByText("My Heading")).toBeInTheDocument();
    expect(getByText("My Heading")).toHaveTextContent("My Heading");

    // re-render the same component with different props
    // https://testing-library.com/docs/react-testing-library/api/#rerender
    rerender(<Astronaut heading="My Heading changed" />);
    expect(getByText("My Heading changed")).toBeInTheDocument();
    expect(getByText("My Heading changed")).toHaveTextContent("My Heading");
  });
});

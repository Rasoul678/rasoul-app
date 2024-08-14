import { describe, expect, it } from "vitest";

import Astronaut from "@components/Astronaut";
import { render } from "@test-utils";

describe("Astronaut component", () => {
  it("should contains default prop", () => {
    const { getByDataVi } = render(<Astronaut />);
    expect(getByDataVi("vit-astr-head")).toBeDefined();
    expect(getByDataVi("vit-astr-head")).toHaveTextContent("Follow me");
  });

  it("should render with right lang", () => {
    const { getByDataVi } = render(<Astronaut />, { locale: "fa" });
    expect(getByDataVi("vit-astr-head")).toBeDefined();
    expect(getByDataVi("vit-astr-head")).toHaveTextContent("در ارتباط باش");
  });

  it("should contains given prop", () => {
    const { getByDataVi } = render(<Astronaut heading="My Heading" />);
    expect(getByDataVi("vit-astr-head")).toBeDefined();
    expect(getByDataVi("vit-astr-head")).toHaveTextContent("My Heading");
  });

  it("should contains heading with prop change", () => {
    const { getByDataVi, rerender } = render(
      <Astronaut heading="My Heading" />
    );

    expect(getByDataVi("vit-astr-head")).toBeInTheDocument();
    expect(getByDataVi("vit-astr-head")).toHaveTextContent("My Heading");

    // re-render the same component with different props
    // https://testing-library.com/docs/react-testing-library/api/#rerender
    rerender(<Astronaut heading="My Heading changed" />);
    expect(getByDataVi("vit-astr-head")).toBeInTheDocument();
    expect(getByDataVi("vit-astr-head")).toHaveTextContent("My Heading");
  });
});

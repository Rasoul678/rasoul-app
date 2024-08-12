import { expect, it, describe } from "vitest";
import { add } from "@__test__/add";

describe("test", () => {
  it("works", () => {
    expect(add(1, 2)).toBe(3);
  });
});

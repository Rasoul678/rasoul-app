import { expect, it, vi, describe } from "vitest";
import { add } from "@__test__/add";

describe("Test", () => {
  it("works", () => {
    expect(add(1, 2)).toBe(3);
  });
});

import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// The code above mocks window.matchMedia and ResizeObserver APIs
// that are not available in jsdom environment
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
window.HTMLElement.prototype.scrollIntoView = () => {};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

/**
 * Mocks the `next/font/local` module, returning a default export that provides a mocked font class and font family.
 * This is used to simulate the behavior of the `next/font/local` module in a testing environment where the actual font files are not available.
 */
vi.mock("next/font/local", () => ({
  default: () => ({
    className: "mocked-font-class",
    style: { fontFamily: "mocked-font-family" },
  }),
}));

afterEach(() => {
  cleanup();
});

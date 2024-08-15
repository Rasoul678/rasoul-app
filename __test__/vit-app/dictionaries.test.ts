import { afterEach, describe, expect, it, Mock, vi } from "vitest";

import { getDictionary } from "@app/[lang]/dictionaries";
import enJson from "@assets/dictionaries/en/en.json";
import faJson from "@assets/dictionaries/fa/fa.json";

/**
 * Disables a package that checks that module is importable only (server-only) on the server side.
 * Also, this mock can be defined in the Vitest setup file.
 */
vi.mock("@app/[lang]/dictionaries", () => {
  return { getDictionary: vi.fn() };
});

afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});

describe("test dictionaries module in server-only mode", () => {
  it("returns dictionary object correctly in english", async () => {
    (getDictionary as Mock).mockReturnValue(enJson);
    const enDic = await getDictionary("en");

    expect(enDic.blue).toBe("Blue");
    expect(enDic.me).toBe("Rasoul Hesami Rostami");
  });

  it("returns dictionary object correctly in persian", async () => {
    (getDictionary as Mock).mockReturnValue(faJson);
    const faDic = await getDictionary("fa");

    expect(faDic.blue).toBe("آبی");
    expect(faDic.me).toBe("رسول حسامی رستمی");
  });
});

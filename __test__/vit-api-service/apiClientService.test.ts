import { afterEach, describe, expect, it, vi } from "vitest";
import { clientService } from "../../utils/api-service/apiClientService";
import { PersonUserObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { executeBash } from "@__test__/helper";

//* check if Next server is running for real api call
let { stdout } = await executeBash(
  "wget --spider -S http://localhost:3000/api/notion 2>&1 | grep 'HTTP/' | awk '{print $2}'"
);

const NextIsDown = stdout !== "200";

const authExUser: PersonUserObjectResponse = {
  object: "user",
  id: "id",
  name: "Rasoul Hesami Rostami",
  avatar_url: "avatar url",
  type: "person",
  person: { email: "h.rostami.r@gmail.com" },
};

afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});

describe("clientService.getNotionAuthUser() should return auth user", () => {
  // Next.js server must be running.
  // Comment vi.mock("./apiClientService"), before un-skip this test.
  //! Not good 🙅‍♂️
  it.skipIf(NextIsDown)(
    "by invoking a real api call",
    async () => {
      const fetchSpy = vi.spyOn(globalThis, "fetch");
      const response = await clientService.getNotionAuthUser(true);

      const endPoint = "http://localhost:3000/api/notion";
      expect(fetchSpy).toHaveBeenCalledWith(endPoint);

      expect(response).toBeDefined();
      expect(response).not.toEqual(authExUser);
      expect(response.avatar_url).not.toBe(authExUser.avatar_url);
      expect(response.object).toBe(authExUser.object);
      expect(response.name).toBe(authExUser.name);
      expect(response).toMatchSnapshot();
    },
    10000
  );

  it("by mocking return value", async () => {
    const { clientService } = await vi.importMock<
      typeof import("@/utils/api-service/apiClientService")
    >("../../utils/api-service/apiClientService");

    clientService.getNotionAuthUser.mockResolvedValue(authExUser);
    const response = await clientService.getNotionAuthUser();

    expect(response).toBeDefined();
    expect(response).toEqual(authExUser);
    expect(response.object).toBe(authExUser.object);
    expect(response.name).toBe(authExUser.name);
  });

  it("by mocking network call", async () => {
    const mockResponse = {
      ok: true,
      statusText: "OK",
      json: async () => ({
        type: "user",
        user: {},
        object: "list",
        next_cursor: null,
        has_more: false,
        results: [authExUser],
      }),
    } as Response;

    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(mockResponse);

    const response = await clientService.getNotionAuthUser(true);

    const endPoint = "http://localhost:3000/api/notion";
    expect(fetchSpy).toHaveBeenCalledWith(endPoint);

    expect(response).toBeDefined();
    expect(response).toEqual(authExUser);
    expect(response.object).toBe(authExUser.object);
    expect(response.name).toBe(authExUser.name);
  });
});

//* Test Tricks
// doMock() doesn't do the hoisting that mock() does which means
// by the time the mock takes effect it's too late since the real
// function is already in memory as it's imported at the top.

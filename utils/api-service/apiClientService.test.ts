import { afterEach, describe, expect, it, vi } from "vitest";
import { clientService } from "./apiClientService";
import { PersonUserObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { sh } from "@__test__/helper";

//* check if Next server is running for real api call
let { stdout, stderr } = await sh(
  "wget --spider -S http://localhost:3000/api/notion 2>&1 | grep 'HTTP/' | awk '{print $2}'"
);

afterEach(() => {
  vi.clearAllMocks();
  vi.resetAllMocks();
});

describe("fetch auth user", () => {
  // Next.js server must be running.
  // Comment vi.mock("./apiClientService"), before un-skip this test.
  //! Not good 🙅‍♂️
  it.skipIf(stdout !== "200")(
    "should return a user by invoking a real api call",
    async () => {
      const fetchSpy = vi.spyOn(globalThis, "fetch");
      const response = await clientService.getNotionAuthUser(true);

      const endPoint = "http://localhost:3000/api/notion";
      expect(fetchSpy).toHaveBeenCalledWith(endPoint);

      expect(response).toBeDefined();
      expect(response.object).toBe("user");
      expect(response.name).toBe("Rasoul Hesami Rostami");
      expect(response).toMatchSnapshot();
    },
    10000
  );

  it.skipIf(stdout == "200")(
    "should return a user by mocking value",
    async () => {
      const { clientService } = await vi.importMock<
        typeof import("./apiClientService")
      >("./apiClientService");

      const expectedUser: PersonUserObjectResponse = {
        object: "user",
        id: "id",
        name: "Rasoul Hesami Rostami",
        avatar_url: "avatar url",
        type: "person",
        person: { email: "h.rostami.r@gmail.com" },
      };

      clientService.getNotionAuthUser.mockResolvedValue(expectedUser);
      const response = await clientService.getNotionAuthUser();
      expect(response).toEqual(expectedUser);

      expect(response).toBeDefined();
      expect(response.object).toBe("user");
      expect(response.name).toBe("Rasoul Hesami Rostami");
    }
  );
});

//* Test Tricks
// doMock() doesn't do the hoisting that mock() does which means
// by the time the mock takes effect it's too late since the real
// function is already in memory as it's imported at the top.

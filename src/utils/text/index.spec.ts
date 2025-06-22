import { capitalize } from "./index";

describe("Text utils", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});

import { describe, expect, it } from "@jest/globals";
import subtract from "../substract";

describe("Substract util function", () => {
  it("Returns correct value of substract", () => {
    expect(subtract(5, 2)).toEqual(3);
  });
});

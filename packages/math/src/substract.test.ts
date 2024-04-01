import { subtract } from "./substract";
import { describe, test, expect } from "@jest/globals";

describe("Substract util function", () => {
  test("Returns correct value of substract", () => {
    expect(subtract(5, 2)).toEqual(3);
  });
});

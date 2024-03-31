import { add, subtract } from "./index";
import { describe, test, expect } from "@jest/globals";

describe("Add util function", () => {
  test("Returns correct value of sum ", () => {
    expect(add(2, 5)).toEqual(7);
  });
});

describe("Substract util function", () => {
  test("Returns correct value of substract", () => {
    expect(subtract(5, 2)).toEqual(3);
  });
});

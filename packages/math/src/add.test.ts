import { add } from "./add";
import { describe, test, expect } from "@jest/globals";

describe("Add util function", () => {
  test("Returns correct value of sum ", () => {
    expect(add(2, 5)).toEqual(7);
  });
});

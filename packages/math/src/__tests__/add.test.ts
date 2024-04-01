import { describe, expect, it } from "@jest/globals";
import add from "../add";

describe("Add util function", () => {
  it("Returns correct value of sum ", () => {
    expect(add(2, 5)).toEqual(7);
  });
});

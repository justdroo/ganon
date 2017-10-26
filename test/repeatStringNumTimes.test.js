const { repeatStringNumTimes } = require("../lib");

describe("repeatStringNumTimes", () => {
  test("string of 'a' and number of times, 3, should return 'aaa'", () => {
    expect(repeatStringNumTimes("a", 3)).toBe("aaa");
  });

  test("string of 'Hello' and number of times, 3, should return 'HelloHelloHello'", () => {
    expect(repeatStringNumTimes("Hello", 3)).toBe("HelloHelloHello");
  });

  test("string of 'abc' and number of times, 1, should return 'abc'", () => {
    expect(repeatStringNumTimes("abc", 1)).toBe("abc");
  });

  test("string of 'xyz' and number of times, -6, should return an empty string", () => {
    expect(repeatStringNumTimes("xyz", -6)).toBe("");
  });
});

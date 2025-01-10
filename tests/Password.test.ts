import { calculatePasswordStrength } from "../src/Password";

describe("Password tests", () => {
  // 1. ‘’ str = 0 Very weak
  test("Empty password", () => {
    expect(calculatePasswordStrength("")).toBe("Very Weak");
  });

  // 2. ‘1234567’ str = 1 Very weak
  test("1234567", () => {
    expect(calculatePasswordStrength("1234567")).toBe("Very Weak");
  });

  // 3. ‘abc1234’ str = 2 Very weak
  test("abc1234", () => {
    expect(calculatePasswordStrength("abc1234")).toBe("Very Weak");
  });

  // 4. 'abcабв1' str = 3 Weak
  test("abcабв1", () => {
    expect(calculatePasswordStrength("abcабв1")).toBe("Weak");
  });

  // 5. ‘абвабв1’ str = 2 Very weak
  test("абвабв1", () => {
    expect(calculatePasswordStrength("абвабв1")).toBe("Very Weak");
  });

  // 6. ‘abcABC1’ str = 3 Weak
  test("abcABC1", () => {
    expect(calculatePasswordStrength("abcABC1")).toBe("Weak");
  });

  // 7. ‘abAB1!@‘ str = 4 Moderate
  test("abAB1!@", () => {
    expect(calculatePasswordStrength("abAB1!@")).toBe("Moderate");
    //console.log(Password.strength)
  });

  // 8. ‘12345678’ str = 2 Very weak
  test("12345678", () => {
    expect(calculatePasswordStrength("12345678")).toBe("Very Weak");
  });

  // 9. ‘123456789’ str = 2 Very weak
  test("123456789", () => {
    expect(calculatePasswordStrength("123456789")).toBe("Very Weak");
  });

  // 10. ‘123456abc’ str = 3 Weak
  test("123456abc", () => {
    expect(calculatePasswordStrength("123456abc")).toBe("Weak");
  });

  // 11. ‘123abcABC’ str = 4 Moderate
  test("123abcABC", () => {
    expect(calculatePasswordStrength("123abcABC")).toBe("Moderate");
  });

  // 12. ‘123abAB!@‘ str = 5 Strong
  test("123abAB!@", () => {
    expect(calculatePasswordStrength("123abAB!@")).toBe("Strong");
  });

  // 13. ‘12345678901’ str = 2 Very weak
  test("12345678901", () => {
    expect(calculatePasswordStrength("12345678901")).toBe("Very Weak");
  });

  // 14. ‘123456789012’ str = 3 Weak
  test("123456789012", () => {
    expect(calculatePasswordStrength("123456789012")).toBe("Weak");
  });

  // 15. ‘1234567890123’ str = 3 Weak
  test("1234567890123", () => {
    expect(calculatePasswordStrength("1234567890123")).toBe("Weak");
  });

  // 16. ‘abc1234567890’ str = 4 Moderate
  test("abc1234567890", () => {
    expect(calculatePasswordStrength("abc1234567890")).toBe("Moderate");
  });

  // 17. ‘abcABC1234567’ str = 5 Strong
  test("abcABC1234567", () => {
    expect(calculatePasswordStrength("abcABC1234567")).toBe("Strong");
  });

  // 18. ‘-@ abcABC1234’ str = 6 Strong
  test("-@ abcABC1234", () => {
    expect(calculatePasswordStrength("-@ abcABC1234")).toBe("Strong");
  });
});

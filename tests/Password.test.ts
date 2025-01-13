import { calculatePasswordStrength } from '../src/Password'

describe('Password tests', () => {
  // 1. ‘’ str = 0 Very weak
  test('Empty password is very weak', () => {
    expect(calculatePasswordStrength('')).toBe('Very Weak')
  })

  // 2. ‘1234567’ str = 1 Very weak
  test('7 symbols: digits only - is very weak', () => {
    expect(calculatePasswordStrength('1234567')).toBe('Very Weak')
  })

  // 3. ‘abc1234’ str = 2 Very weak
  test('7 symbols: digits and latin lowcase letters - is very weak', () => {
    expect(calculatePasswordStrength('abc1234')).toBe('Very Weak')
  })

  // 4. 'abcабв1' str = 3 Weak
  test('7 symbols: digits, latin and cyrillic lowcase letters - is weak', () => {
    expect(calculatePasswordStrength('abcабв1')).toBe('Weak')
  })

  // 5. ‘абвабв1’ str = 2 Very weak
  test('7 symbols: digits and cyrillic lowcase letters - is very weak', () => {
    expect(calculatePasswordStrength('абвабв1')).toBe('Very Weak')
  })

  // 6. ‘abcABC1’ str = 3 Weak
  test('7 symbols: digits, latin lowcase and uppercase letters - is weak', () => {
    expect(calculatePasswordStrength('abcABC1')).toBe('Weak')
  })

  // 7. ‘abAB1!@‘ str = 4 Moderate
  test('7 symbols: digits, latin lowcase, uppercase letters, special characters - is moderate', () => {
    expect(calculatePasswordStrength('abAB1!@')).toBe('Moderate')
    //console.log(Password.strength)
  })

  // 8. ‘12345678’ str = 2 Very weak
  test('8 symbols: digits only - is very weak', () => {
    expect(calculatePasswordStrength('12345678')).toBe('Very Weak')
  })

  // 9. ‘123456789’ str = 2 Very weak
  test('9 symbols: digits only - is very weak', () => {
    expect(calculatePasswordStrength('123456789')).toBe('Very Weak')
  })

  // 10. ‘123456abc’ str = 3 Weak
  test('9 symbols: digits and latin lowcase letters - is weak', () => {
    expect(calculatePasswordStrength('123456abc')).toBe('Weak')
  })

  // 11. ‘123abcABC’ str = 4 Moderate
  test('9 symbols: digits, latin lowcase and uppercase letters - is moderate', () => {
    expect(calculatePasswordStrength('123abcABC')).toBe('Moderate')
  })

  // 12. ‘123abAB!@‘ str = 5 Strong
  test('9 symbols: digits, latin lowcase, uppercase letters, special characters - is strong', () => {
    expect(calculatePasswordStrength('123abAB!@')).toBe('Strong')
  })

  // 13. ‘12345678901’ str = 2 Very weak
  test('11 symbols: digits only - is very weak', () => {
    expect(calculatePasswordStrength('12345678901')).toBe('Very Weak')
  })

  // 14. ‘123456789012’ str = 3 Weak
  test('12 symbols: digits only - is weak', () => {
    expect(calculatePasswordStrength('123456789012')).toBe('Weak')
  })

  // 15. ‘1234567890123’ str = 3 Weak
  test('13 symbols: digits only - is weak', () => {
    expect(calculatePasswordStrength('1234567890123')).toBe('Weak')
  })

  // 16. ‘abc1234567890’ str = 4 Moderate
  test('13 symbols: digits and latin lowcase letters - is moderate', () => {
    expect(calculatePasswordStrength('abc1234567890')).toBe('Moderate')
  })

  // 17. ‘abcABC1234567’ str = 5 Strong
  test('13 symbols:latin lowcase and uppercase letters - is strong', () => {
    expect(calculatePasswordStrength('abcABC1234567')).toBe('Strong')
  })

  // 18. ‘-@ abcABC1234’ str = 6 Strong
  test('13 symbols: digits, latin lowcase, uppercase letters, special characters - is strong', () => {
    expect(calculatePasswordStrength('-@ abcABC1234')).toBe('Strong')
  })
})

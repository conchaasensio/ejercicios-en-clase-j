'use strict';

const paddingLeft = require('./paddingLeft');

describe('paddingLeft', () => {
  test("paddingLeft('hola mi amigo', 6, 'x') devuelve 'hola mi amigo'", () => {
    const result = paddingLeft('hola mi amigo', 6, 'x');

    expect(result).toBe('hola mi amigo');
  });
  test("paddingLeft('hola', 6, 'x') devuelve 'xxhola'", () => {
    const result = paddingLeft('hola', 6, 'x');

    expect(result).toBe('xxhola');
  });

  test("paddingLeft('hola', 6, 'a') devuelve 'aahola'", () => {
    const result = paddingLeft('hola', 6, 'a');

    expect(result).toBe('aahola');
  });

  test("paddingLeft('ee', 4, 'aa') devuelve 'aaee'", () => {
    const result = paddingLeft('ee', 4, 'aa');

    expect(result).toBe('aaee');
  });

  test("paddingLeft('xxxx', 6, 'x') devuelve 'xxxxxx'", () => {
    const result = paddingLeft('xxxx', 6, 'x');

    expect(result).toBe('xxxxxx');
  });

  test("paddingLeft('', 6, 'x') devuelve 'xxxxxx'", () => {
    const result = paddingLeft('', 6, 'x');

    expect(result).toBe('xxxxxx');
  });

  test("paddingLeft('xxxx', 0, 'x') devuelve 'xxxx'", () => {
    const result = paddingLeft('xxxx', 0, 'x');

    expect(result).toBe('xxxx');
  });
});

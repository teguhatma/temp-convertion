/**
 * @jest-environment jsdom
 */

const { CelToFah, CelToRea } = require('./validate')

test("2 Celcius to Fahrenheit expect 35.6", () => {
    expect(CelToFah(2)).toBe(35.6)
})

test("2 Celcius to Reamur expect 1.6", () => {
    expect(CelToRea(2)).toBe(1.6)
})
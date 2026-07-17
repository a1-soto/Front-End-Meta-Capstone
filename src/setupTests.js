// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

window.matchMedia = window.matchMedia || function (query) {
  return {
    matches: false,          // simula que ninguna media query aplica
    media: query,
    onchange: null,
    addListener: function () {},    // métodos viejos (deprecados pero GSAP los soporta)
    removeListener: function () {},
    addEventListener: function () {}, // métodos modernos
    removeEventListener: function () {},
    dispatchEvent: function () { return false; },
  };
};
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock for matchMedia — jsdom (Jest's simulated browser) does not implement
// this browser API. GSAP uses it internally (gsap.matchMedia()) to detect
// prefers-reduced-motion and breakpoints, so without this mock any component
// using the useGsapMatchMedia hook would fail to mount.
window.matchMedia = window.matchMedia || function (query) {
  return {
    matches: false,          // simulates that no media query currently matches
    media: query,
    onchange: null,
    addListener: function () {},    // legacy methods (deprecated but still used by GSAP)
    removeListener: function () {},
    addEventListener: function () {}, // modern methods
    removeEventListener: function () {},
    dispatchEvent: function () { return false; },
  };
};

// Mock for ResizeObserver — GSAP ScrollTrigger uses it internally to
// recalculate positions when a container's size changes, but jsdom doesn't
// implement it out of the box either. Without this mock, any component using
// ScrollTrigger (Specials, CustomersSay, Chicago) throws a silent error
// when mounting in tests.
global.ResizeObserver = class ResizeObserver {
  observe() {}      // does nothing real — just prevents GSAP from failing when it calls this
  unobserve() {}
  disconnect() {}
};

// Mock for document.fonts — the Font Loading API doesn't exist in jsdom either.
// useGsapMatchMedia.js uses document.fonts.ready to wait for fonts to load
// before recalculating ScrollTrigger. In the test environment there are no
// real fonts to load, so we simulate an already-resolved promise so the
// .then() doesn't throw against "undefined".
if (!document.fonts) {
  document.fonts = {
    ready: Promise.resolve(),
  };
}
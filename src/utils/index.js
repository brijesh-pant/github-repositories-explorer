import mediaQuery from "css-mediaquery";

const createMatchMedia = (width) => (query) => {
  return {
    matches: mediaQuery.match(query, { width }),
    media: "",
    addListener: () => {},
    removeListener: () => {},
    onchange: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  };
};

export const resizeScreenSize = (width) => {
  window.matchMedia = createMatchMedia(width);
};
